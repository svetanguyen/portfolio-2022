<template>
  <div
    v-if="currentTabData && !minimized && !closed"
    ref="window"
    class="shadow-sm rounded-2xl overflow-hidden transition-all"
    :class="{
      '!h-full-screen-mob lg:!h-full-screen !m-0 !max-w-none !fixed top-0 lg:top-0 left-0 !w-full':
        maximized || windowWidth <= 1024,
      'h-[70vh] absolute top-10 mx-auto pb-1  -translate-x-1/2 -translate-y-1/2':
        !maximized && windowWidth > 1024,
      'lg:w-[380px] lg:!min-w-0 lg:max-h-[540px]': !maximized && isFile,
      'lg:resize': !maximized && !isFile,
      'z-20': !maximized && isActive,
      'z-10': !maximized && !isActive,
      'z-30': maximized && !isActive,
      'z-40': maximized && isActive,
    }"
    @mousedown="addIsDragged"
    @dragstart="startDrag"
    @drag="dragging"
    :draggable="maximized || windowWidth <= 1024 ? false : true"
    :style="{
      top: windowWidth <= 1024 || maximized ? 0 : (top && `${top}px`) || '50%',
      left:
        windowWidth <= 1024 || maximized ? 0 : (left && `${left}px`) || '50%',
    }"
    :id="`window-${index}`"
  >
    <div
      class="flex flex-wrap items-center justify-between bg-pink-light mt-0.5 mr-1 ml-0.5 rounded-t-2xl"
    >
      <div class="flex items-center gap-x-2.5 mt-1 mx-0.5">
        <img
          class="w-6"
          :src="require(`../../assets/images/${currentTabData.icon}`)"
          alt="heart"
          width="24"
          height="24"
        />
        <h4 class="text-[17px] lg:text-[25px] leading-none font-serif">
          {{ currentTabData.title }}
        </h4>
      </div>
      <controls-component
        :opened-windows="openedWindows"
        :query="currentTabData?.query"
        :maximized="maximized"
        :is-file="isFile"
        :index="index"
        :window-width="windowWidth"
        :disable-maximize="disableMaximize"
        @restore="onRestore({ index: index })"
      />
    </div>
    <folder-component
      :maximized="maximized"
      :folder="currentTabData.folder"
      :title="currentTabData.title"
      v-if="!isFile"
      class="ml-0.5 mr-1 flex-grow"
    >
      <component
        v-if="currentTabData.component"
        :maximized="maximized"
        :is="currentTabData.component"
        :class="{ 'w-full lg:w-[650px]': !maximized, 'w-full': maximized }"
      />
    </folder-component>
    <div
      v-if="isFile"
      class="h-file-content flex font-normal py-6 px-2 text-lg leading-snug mr-1 ml-0.5 rounded-b-2xl text-[25px] bg-pink-light lg:px-3 lg:py-2"
      :class="{
        'lg:h-full-screen-container ': maximized,
      }"
    >
      <div
        class="overflow-hidden w-full"
        :class="{
          'lg:w-2/3 lg:ml-5': maximized && !isFile,
          'lg:w-3/4 lg:ml-5': !maximized && !isFile,
        }"
      >
        <div class="py-2 bg-white h-full shadow-lg">
          <div
            :class="{
              'px-5 my-[4px] flex-grow': maximized,
            }"
            class="h-full overflow-y-scroll mr-1"
          >
            <div class="h-full w-full">
              <component
                v-if="currentTabData.component"
                :is="currentTabData.component"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FolderComponent from "./Folder.vue";
import ControlsComponent from "./Controls.vue";
import { mapState, mapMutations } from "vuex";

// Content components
import CalculatorComponent from "../Files/Calculator.vue";
import HelloComponent from "../Folders/Hello.vue";
import PortfolioComponent from "../Folders/MyPortfolio.vue";
import AboutComponent from "../Folders/About/About.vue";
import WorksComponent from "../Folders/Works/Works.vue";
import ContactComponent from "../Files/Contact.vue";
import InfoComponent from "../Folders/About/Info.vue";
import SkillsComponent from "../Folders/About/Skills.vue";
import WorksList from "../Folders/Works/WorksList.vue";

export default {
  name: "window-component",
  data() {
    return {
      top: null,
      left: null,
      startTop: 0,
      startLeft: 0,
      endTop: 0,
      endLeft: 0,
      isDragged: false,
      isActive: false,
      currentTabData: {},
    };
  },
  props: [
    "title",
    "minimized",
    "maximized",
    "closed",
    "index",
    "windowWidth",
    "openedWindows",
    "openedFile",
    "disableMaximize",
    "isFile",
  ],
  components: {
    ControlsComponent,
    FolderComponent,
    CalculatorComponent,
    HelloComponent,
    PortfolioComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    InfoComponent,
    SkillsComponent,
    WorksList,
  },
  computed: {
    ...mapState(["prevLinks", "nextLinks", "updatedLinks", "folders", "files"]),
  },
  created() {
    this.currentTabData = this.isFile
      ? this.files.find((file) => file.query === this.$route?.query.file)
      : this.folders.find(
          (folder) => folder.query === this.$route?.query.folder
        );
    if (!this.currentTabData) return;
    this.updateActive(
      (this.isFile && this.$route?.query.active === "file") ||
        (!this.isFile && this.$route?.query.active === "folder")
    );
    this.checkMaximize(
      (this.isFile && this.$route?.query.max === "file") ||
        (!this.isFile && this.$route?.query.max === "folder")
    );
    const isFolderOpen = !this.isFile && !!this.$route.query.folder;
    const isFileOpen = !!this.$route.query.file && this.isFile;
    const maxQuery = this.$route.query.max
      ? this.isFile
        ? "file"
        : "folder"
      : "";
    if (isFolderOpen || isFileOpen) {
      this.onOpen({ index: this.index });
    } else {
      this.updateQuery(
        maxQuery,
        this.$route?.query.folder,
        this.$route?.query.file,
        this.$route?.query.active
      );
      this.onClose({ index: this.index });
    }
    this.initDragAndDrop();
  },
  watch: {
    $route(to, from) {
      if (
        (this.isFile && to.query.file !== from.query.file) ||
        (!this.isFile && to.query.folder !== from.query.folder)
      ) {
        this.currentTabData = this.isFile
          ? this.files.find((file) => file?.query === to?.query?.file)
          : this.folders.find((folder) => folder?.query === to?.query?.folder);
      }
      this.isDragged = false;
      this.updateActive(
        (this.isFile && to?.query.active === "file") ||
          (!this.isFile && to?.query.active === "folder")
      );
      this.checkMaximize(
        (this.isFile && to.query.max === "file") ||
          (!this.isFile && to.query.max === "folder")
      );
      this.updateOpen(to.query);
    },
    windowWidth: function (newVal) {
      if (newVal <= 1024) this.onMaximize({ index: this.index });
    },
  },
  methods: {
    ...mapMutations([
      "addNext",
      "addPrev",
      "removePrev",
      "removeNext",
      "updateUpdatedLinks",
      "resetLinks",
      "onMinimize",
      "onOpen",
      "onClose",
      "onMaximize",
      "onRestore",
    ]),
    reset() {
      this.top = null;
      this.left = null;
      this.startTop = 0;
      this.startLeft = 0;
      this.endTop = 0;
      this.endLeft = 0;
    },
    updateOpen(query) {
      const isOpen =
        (!!query.folder && !this.isFile) || (!!query.file && this.isFile);
      const isClosed =
        (!!query.folder && !this.isFile) || (!!query.file && this.isFile);
      if (isOpen) {
        this.onOpen({ index: this.index });
      } else if (isClosed) {
        this.onClose({ index: this.index });
      }
    },
    updateQuery(max, folder, file, active) {
      this.$router.push({
        path: this.$route.path,
        query: { max: max, folder: folder, file: file, active: active },
      });
    },
    initDragAndDrop() {
      document.body.addEventListener("drop", this.drop);
      document.body.addEventListener("dragover", this.allowDrop);
      document.body.addEventListener("dragend", this.endDrag);
    },
    checkMaximize(maximized) {
      if (maximized) {
        this.onMaximize({ index: this.index });
      } else {
        this.onRestore({ index: this.index });
      }
      if (this.windowWidth <= 1024) this.onMaximize({ index: this.index });
      if (!this.$route?.query.max && this.windowWidth > 1024) {
        this.onRestore({ index: this.index });
      }
    },
    updateActive(active) {
      this.isActive = active;
    },
    addIsDragged() {
      this.isDragged = true;
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route?.query,
          active: this.isFile ? "file" : "folder",
        },
      });
      this.getPosition();
    },
    startDrag(e) {
      if (!this.isDragged) return;
      if (this.maximized || this.window <= 1024) return;
      this.startTop = e.clientY;
      this.startLeft = e.clientX;
    },
    dragging() {
      if (!this.isDragged) return;
      if (this.maximized || this.window <= 1024) return;
      const windowEl = document.querySelector(`#window-${this.index}`);
      this.getPosition(windowEl);
    },
    drop(e) {
      if (!this.isDragged) return;
      if (this.maximized || this.window <= 1024) return;
      e.preventDefault();
      this.endTop = e.clientY;
      this.endLeft = e.clientX;
    },
    endDrag() {
      if (!this.isDragged) return;
      if (this.maximized || this.window <= 1024) return;
      const windowEl = document.querySelector(`#window-${this.index}`);
      if (windowEl) {
        this.top = this.endTop - this.startTop + this.top;
        this.left = this.endLeft - this.startLeft + this.left;
        this.isDragged = false;
      }
    },
    allowDrop(e) {
      if (!this.isDragged) return;
      e.preventDefault();
    },
    getPosition(windowEl) {
      if (!this.isDragged) return;
      if (windowEl) {
        var rect = windowEl?.getBoundingClientRect();
        this.top = rect?.top + windowEl.clientHeight / 2;
        this.left = rect?.left + windowEl.clientWidth / 2;
      }
    },
  },
};
</script>

<style lang="scss"></style>

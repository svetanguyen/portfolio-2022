<template>
  <div
    ref="windowWrapper"
    v-if="currentTabData && !minimized && !closed"
    class="shadow-sm rounded-2xl overflow-hidden"
    :class="{
      '!h-full-screen-mob lg:!h-full-screen !m-0 !max-w-none !fixed top-0 lg:top-0 left-0 !w-full':
        maximized || windowWidth <= 1024,
      'h-[70vh] absolute top-10 mx-auto pb-1': !maximized && windowWidth > 1024,
      'lg:w-[380px] lg:!min-w-0 lg:max-h-[540px]': !maximized && isFile,
      'z-20': !maximized && isActive,
      'z-10': !maximized && !isActive,
      'z-30': maximized && !isActive,
      'z-40': maximized && isActive,
    }"
    @mousedown="onActive"
    :style="{
      top: windowWidth <= 1024 || maximized ? 0 : (top && `${top}px`) || '50%',
      left:
        windowWidth <= 1024 || maximized ? 0 : (left && `${left}px`) || '50%',
    }"
    :id="`window-${index}`"
  >
    <div
      class="flex flex-wrap items-center justify-between bg-pink-light mt-0.5 mr-1 ml-0.5 rounded-t-2xl"
      @mousedown="addIsDragged"
      @mouseup="removeIsDragged"
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
      isDragged: false,
      isActive: false,
      currentTabData: {},
      prevTop: 0,
      prevLeft: 0,
      diffY: 0,
      diffX: 0
    };
  },
  props: [
    "minimized",
    "maximized",
    "closed",
    "index",
    "windowWidth",
    "openedWindows",
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
    ...mapState(["folders", "files"]),
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
    this.getInitialPosition(this.$refs.windowWrapper);
    document.body.addEventListener("mousemove", this.handleMove)
  },
  mounted() {
    document.body.addEventListener("mousemove", this.handleMove)
    setTimeout(() => {
      if (!this.top || !this.left) {
        this.getInitialPosition(this.$refs.windowWrapper);
      }
    }, 0);
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
    maximized: function(newVal) {
      if (!newVal) {
        this.top = this.prevTop
        this.left = this.prevLeft
        this.prevTop = 0
        this.prevLeft = 0
      } else {
        this.prevTop = this.top
        this.prevLeft = this.left
      }
    },
    closed: function(newVal) {
      if (!newVal) {
          setTimeout(() => {
            if (!this.top || !this.left) {
              this.getInitialPosition(this.$refs.windowWrapper);
            }
          }, 0)
          this.getInitialPosition(this.$refs.windowWrapper);
      }
    },
    minimized: function(newVal) {
      if (!newVal) {
        if (!this.top || !this.left && this.$refs.windowWrapper) {
          this.getInitialPosition(this.$refs.windowWrapper);
        }
      }
    }

  },
  methods: {
    ...mapMutations([
      "onOpen",
      "onClose",
      "onMaximize",
      "onRestore",
    ]),
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
    addIsDragged(e) {
      this.isDragged = true;
      this.getMousePositionDifference(this.$refs.windowWrapper, e.clientX, e.clientY)
    },
    onActive() {
      this.updateQuery(this.$route.query.max, this.$route.query.folder, this.$route.query.file, this.isFile ? 'file' : 'folder')
    },
    removeIsDragged() {
      this.isDragged = false
    },
    handleMove(e) {
      if (!this.isDragged) return
      this.top = e.clientY - this.diffY
      this.left = e.clientX - this.diffX
    },
    getMousePositionDifference(windowEl, mouseX, mouseY) {
      if (!windowEl) return
      var rect = windowEl?.getBoundingClientRect();
      this.diffY = mouseY - rect?.top 
      this.diffX = mouseX - rect?.left 
    },
    getInitialPosition(windowEl) {
      if (windowEl) {
        var rect = windowEl?.getBoundingClientRect();
        this.top = rect?.top - windowEl.clientHeight / 2;
        this.left = rect?.left - windowEl.clientWidth / 2;
      }
    },
  },
};
</script>

<style lang="scss"></style>

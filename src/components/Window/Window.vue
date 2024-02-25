<template>
  <div
    ref="windowWrapper"
    v-if="currentTabData && !minimized && !closed"
    class="shadow-sm rounded-2xl overflow-hidden"
    :class="{
      '!h-full-screen-mob lg:!h-full-screen !m-0 !max-w-none !fixed top-0 lg:top-0 left-0 !w-full': (this.maximized && this.type !== 'dialog') || (this.isMobile && this.type !== 'dialog'),
      '!fixed': (this.isMobile && this.type === 'dialog') || (this.maximized && this.type === 'dialog'),
      '!top-[45%] -translate-y-1/2 !left-3 right-3': (this.isMobile && this.type === 'dialog'),
      'absolute top-10 mx-auto pb-1': !maximized && !isMobile,
      'h-[70vh]': !maximized && !isMobile && type !== 'dialog',
      'lg:max-h-[540px]': !maximized && type === 'file',
      'lg:w-[380px]': currentTabData?.small && !maximized,
      'lg:min-w-[800px]':
        !currentTabData.small && !maximized && type === 'file',
      'lg:min-w-[564px]': type === 'dialog',
      'z-20': !maximized && isActive && type !== 'dialog',
      'z-10': !maximized && !isActive && type !== 'dialog',
      'z-30': maximized && !isActive && type !== 'dialog',
      'z-40': maximized && isActive && type !== 'dialog',
      'z-50 pointer-events-auto': type === 'dialog',
    }"
    @mousedown="onActive"
    :style="{
      top: isMobile || maximized ? 0 : (top && `${top}px`) || '30%',
      left:
        isMobile || maximized ? 0 : (left && `${left}px`) || '30%',
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
        :disable-maximize="currentTabData?.disableMaximize"
        :is-dialog="isDialog"
        :type="type"
        @restore="onRestore({ index: index })"
      />
    </div>
    <folder-component
      :maximized="maximized"
      :folder="currentTabData.folder"
      :title="currentTabData.title"
      v-if="type === 'folder'"
      class="ml-0.5 mr-1 flex-grow"
    >
      <component
        v-if="currentTabData.component"
        :maximized="maximized"
        :is="currentTabData.component"
        :class="{ 'w-full lg:w-[628px]': !maximized, 'w-full': maximized }"
      />
    </folder-component>
    <div
      v-if="type === 'file' || type === 'dialog'"
      class="flex h-file-content font-normal text-lg leading-snug mr-1 ml-0.5 rounded-b-2xl text-[25px] bg-pink-light"
      :class="{
        'px-2 lg:px-3': currentTabData.inset,
        'lg:h-full-screen-container py-6 lg:py-2':
          type !== 'dialog' && maximized,
      }"
    >
      <div class="overflow-hidden w-full">
        <div
          class="bg-white shadow-lg pt-0.5"
          :class="{ 'h-full': this.type !== 'dialog' || windowWidth <= 1024 }"
        >
          <component
            :class="{
              'px-5 flex-grow': maximized,
              'overflow-y-scroll h-full': currentTabData.inset,
            }"
            v-if="currentTabData.component"
            :is="currentTabData.component"
            :content="currentTabData.content"
            :title="currentTabData.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FolderComponent from "./Folder.vue";
import ControlsComponent from "./Controls.vue";
import { nextTick } from 'vue'
import { mapState, mapMutations } from "vuex";

// Folder components
import HelloComponent from "../Folders/Hello.vue";
import PortfolioComponent from "../Folders/MyPortfolio.vue";
import AboutComponent from "../Folders/About/About.vue";
import ProjectsComponent from "../Folders/Projects/Projects.vue";
import WorksComponent from "../Files/Works/Works.vue";
import InfoComponent from "../Folders/About/Info.vue";
import SkillsComponent from "../Folders/About/Skills.vue";
import WorksList from "../Files/Works/WorksList.vue";

// File components
import CalculatorComponent from "../Files/Calculator.vue";
import ContactComponent from "../Files/Contact.vue";
import NotepadComponent from "../Files/Notepad/Notepad.vue";
import TextComponent from "../Files/Text.vue";

// Dialog components
import SaveDialog from "../Files/Notepad/SaveDialog.vue";
import SuccessComponent from "../Dialogs/FormSuccess.vue"

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
      diffX: 0,
      prevQuery: '',
      isMobile: this.windowWidth <= 1024,
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
    "isDialog",
    "type",
  ],
  components: {
    ControlsComponent,
    FolderComponent,
    CalculatorComponent,
    HelloComponent,
    PortfolioComponent,
    AboutComponent,
    ProjectsComponent,
    WorksComponent,
    ContactComponent,
    InfoComponent,
    SkillsComponent,
    WorksList,
    NotepadComponent,
    TextComponent,
    SaveDialog,
    SuccessComponent
  },
  computed: {
    ...mapState(["folders", "files", "dialogs"]),
  },
  created() {
    switch (this.type) {
      case "file":
        this.currentTabData = this.files.find(
          (file) => file.query === this.$route?.query.file
        );
        break;
      case "folder":
        this.currentTabData = this.folders.find(
          (folder) => folder.query === this.$route?.query.folder
        );
        break;
      case "dialog":
        this.currentTabData = this.dialogs.find(
          (dialog) => dialog.query === this.$route?.query.dialog
        );
        break;
    }

    if (!this.currentTabData) return;
    this.updateActive(
      (this.type === "file" && this.$route?.query.active === "file") ||
        (this.type === "folder" && this.$route?.query.active === "folder")
    );
    this.checkMaximize(
      (this.isFile && this.$route?.query.max === "file") ||
        (!this.isFile && this.$route?.query.max === "folder")
    );
    const isFolderOpen =
      !this.isFile && !!this.$route.query.folder && !this.isDialog;
    const isFileOpen =
      !!this.$route.query.file && this.isFile && !this.isDialog;
    const isDialogOpen = this.isDialog && !!this.$route.query.dialog;
    const maxQuery = this.type === "dialog" ? this.$route.query.max : this.type;

    if (isFolderOpen || isFileOpen || isDialogOpen) {
      this.onOpen({ index: this.index });
    } else {
      this.updateQuery(
        maxQuery,
        this.$route?.query.folder,
        this.$route?.query.file,
        this.$route?.query.dialog,
        this.$route?.query.active
      );
      this.onClose({ index: this.index });
    }
    this.getInitialPosition(this.$refs.windowWrapper);
    document.body.addEventListener("mousemove", this.handleMove);
  },
  mounted() {
    document.body.addEventListener("mousemove", this.handleMove);
    setTimeout(() => {
      if (!this.top || !this.left) {
        this.getInitialPosition(this.$refs.windowWrapper);
      }
    }, 0);
  },
  watch: {
    $route(to, from) {
      this.prevQuery = from.query
      switch (this.type) {
        case "file":
          if (to.query.file !== from.query.file) {
            this.currentTabData = this.files.find(
              (file) => file.query === this.$route?.query.file
            );
          }
          break;
        case "folder":
          if (to.query.folder !== from.query.folder) {
            this.currentTabData = this.folders.find(
              (folder) => folder.query === this.$route?.query.folder
            );
          }
          break;
        case "dialog":
          this.currentTabData = this.dialogs.find(
            (dialog) => dialog.query === this.$route?.query.dialog
          );
          break;
      }
      this.updateActive(
        (this.type === "file" && to?.query.active === "file") ||
          (this.type === "folder" && to?.query.active === "folder")
      );
      this.checkMaximize(
        (this.isFile && to.query.max === "file") ||
          (!this.isFile && to.query.max === "folder")
      );
      this.updateOpen(to.query);
      if (!this.top || !this.left) {
        this.getInitialPosition(this.$refs.windowWrapper);
      }
    },
    windowWidth: function (newVal) {
      if (newVal <= 1024) this.onMaximize({ index: this.index });
    },
    maximized: function (newVal) {
      if (!newVal) {
        this.top = this.prevTop;
        this.left = this.prevLeft;
        this.prevTop = 0;
        this.prevLeft = 0;
      } else {
        this.prevTop = this.top;
        this.prevLeft = this.left;
      }
    },
    closed: function (newVal) {
      if (!newVal) {
        setTimeout(() => {
          if (!this.top || !this.left) {
            this.getInitialPosition(this.$refs.windowWrapper);
          }
        }, 0);
        this.getInitialPosition(this.$refs.windowWrapper);
      }
    },
    minimized: function (newVal) {
      if (!newVal) {
        if (!this.top || (!this.left && this.$refs.windowWrapper)) {
          this.getInitialPosition(this.$refs.windowWrapper);
        }
      }
    },
  },
  methods: {
    ...mapMutations(["onOpen", "onClose", "onMaximize", "onRestore"]),
    async updateOpen(query) {
      const isOpen =
        (!!query.folder && !this.isFile) || (!!query.file && this.isFile);
      const isClosed =
        (!!query.folder && !this.isFile) || (!!query.file && this.isFile);
      if (isOpen) {
        this.onOpen({ index: this.index });
      } else if (isClosed) {
        this.onClose({ index: this.index });
      }
      await nextTick()
      let checkChangeQuery
      switch (this.type) {
        case "file":
          checkChangeQuery = this.prevQuery.file !== this.$route.query.file
          break;
        case "folder":
          checkChangeQuery = this.prevQuery.folder !== this.$route.query.folder
          break;
        case "dialog":
          checkChangeQuery = this.prevQuery.dialog !== this.$route.query.dialog
          break;
      }
      if ((!this.top || !this.left || checkChangeQuery)) {
        this.getInitialPosition(this.$refs.windowWrapper);
      }
    },
    updateQuery(max, folder, file, dialog, active) {
      this.$router.push({
        path: this.$route.path,
        query: {
          max: max,
          folder: folder,
          file: file,
          dialog: dialog,
          active: active,
        },
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
      if (this.$route.query.dialog) return;
      this.isActive = active;
    },
    addIsDragged(e) {
      this.isDragged = true;
      this.getMousePositionDifference(
        this.$refs.windowWrapper,
        e.clientX,
        e.clientY
      );
    },
    onActive() {
      this.updateQuery(
        this.$route.query.max,
        this.$route.query.folder,
        this.$route.query.file,
        this.$route.query.dialog,
        this.isFile ? "file" : "folder"
      );
    },
    removeIsDragged() {
      this.isDragged = false;
    },
    handleMove(e) {
      if (!this.isDragged) return;
      this.top = e.clientY - this.diffY;
      this.left = e.clientX - this.diffX;
    },
    getMousePositionDifference(windowEl, mouseX, mouseY) {
      if (!windowEl) return;
      var rect = windowEl?.getBoundingClientRect();
      this.diffY = mouseY - rect?.top;
      this.diffX = mouseX - rect?.left;
    },
    getInitialPosition(windowEl) {
      if (windowEl) {
        this.top = (window.innerHeight - 60) / 2 - windowEl.clientHeight / 2;
        this.left = window.innerWidth / 2 - windowEl.clientWidth / 2;
      }
    },
  },
};
</script>

<style lang="scss">
* {
  &::-webkit-scrollbar {
    background: transparent;
    width: 0;
  }
}
</style>

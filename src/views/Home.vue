<template>
  <div
    class="main min-h-page overflow-hidden py-11 lg:py-24 mx-auto px-6 lg:px-25 relative h-full-screen-mob lg:h-full-screen"
  >
    <files-component class="absolute left-8 top-8 lg:top-20" :files="files" />
    <window-component
      v-for="(tab, index) in tabs"
      :key="index"
      :minimized="tab.minimized"
      :index="index"
      :closed="tab.closed"
      :window-width="windowWidth"
      :disable-maximize="tab.disableMaximize"
      :small="tab.small"
      :opened-windows="openedWindows"
      :opened-file="openedFile"
      :is-file="tab.isFile"
      :maximized="tab.maximized"
      class="bg-white"
      @unminimize="onUnMinimize"
    />
  </div>
  <taskbar-component
    :window-width="windowWidth"
    :tabs="tabs"
    @unMinimize="onUnMinimize"
  />
</template>

<script>
import TaskbarComponent from "../components/Taskbar.vue";
import WindowComponent from "../components/Window/Window.vue";
import { mapState, mapMutations } from "vuex";
import FilesComponent from "../components/Files.vue";


export default {
  name: "home-page",
  components: {
    WindowComponent,
    TaskbarComponent,
    FilesComponent,
  },
  data() {
    return {
      openedWindows: this.$route?.query?.folder || "",
      openedFile: this.$route?.query?.file || "",
      windowWidth: 0,
      files: [
        {
          name: "My portfolio",
          icon: "computer.png",
          query: "portfolio",
        },
        { name: "Hello", icon: "notepad.png", query: "hello" },
        {
          name: "Resume",
          icon: "document.png",
          query: "hello",
          externalLink:
            "https://drive.google.com/file/d/1NkAXJfQ39CbtDIjX_oEJrZXyJl8EyAil/view?usp=sharing",
        },
        {
          name: "Calculator",
          icon: "calculator.png",
          query: "calculator",
          isFile: true,
          hideSidebar: true
        },
      ],
    };
  },
  computed: {
    ...mapState(["updatedLinks", "tabs"]),
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
    this.$router.push({
      path: this.$route.path,
      query: {
        max: this.$route.query?.max,
        folder: this.$route.query?.folder || "hello",
        file: this.$route.query.file,
        active: this.$route.query.active ? this.$route.query.active : (this.$route.query?.folder && 'folder' )|| (this.$route.query?.file && 'file')
      },
    });
    this.openedWindows = this.$route?.query?.folder || "hello";
  },
  watch: {
    $route(to, from) {
      this.openedWindows = to.query.folder;
      if (!this.updatedLinks) {
        if (from.query.folder && from.query.folder !== to.query.folder) {
          this.addPrev({ query: from.query });
        }
      } else {
        this.updateUpdatedLinks();
      }
    },
  },
  methods: {
    ...mapMutations([
      "addPrev",
      "addNext",
      "removePrev",
      "removeNext",
      "updateUpdatedLinks",
      "unminimize"
    ]),
    onUnMinimize(index) {
      this.unminimize({index: index})
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 1024) {
        this.mobile = true;
        return;
      } else {
        this.mobile = false;
        return;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("../assets/images/bg-1.jpg") no-repeat 50% 50% / cover;
  // cursor: url("../assets/imagπes/cursor.png"), auto;
}

</style>

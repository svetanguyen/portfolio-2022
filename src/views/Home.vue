<template>
  <div
    class="main min-h-page overflow-hidden mx-auto relative h-full-screen-mob lg:h-full-screen"
  >
    <files-component class="flex flex-col max-h-full items-start w-max justify-start pb-20 flex-wrap ml-8 mt-8 lg:mt-20" :files="desktopFiles" />
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
      :type="tab.type"
      class="bg-white"
    />
  </div>
  <taskbar-component
    :window-width="windowWidth"
    :tabs="tabs"
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
    };
  },
  computed: {
    ...mapState(["updatedLinks", "tabs", "desktopFiles", "linksList", "currentLinkIndex"]),
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
    if (this.$route.query?.folder || (this.windowWidth > 1024 && "hello")) {
      this.addLink({ query: this.$route.query?.folder })
    }
    this.$router.push({
      path: this.$route.path,
      query: {
        max: this.$route.query?.max,
        folder: this.$route.query?.folder || (this.windowWidth > 1024 && "hello"),
        file: this.$route.query.file,
        dialog: '',
        active: this.$route.query.active ? this.$route.query.active : (this.$route.query?.folder && 'folder' )|| (this.$route.query?.file && 'file')
      },
    });
    this.openedWindows = this.$route?.query?.folder || "hello";
  },
  watch: {
    $route(to, from) {
      this.openedWindows = to.query.folder;
      if (!this.updatedLinks) {
        if (from.query.folder !== to.query.folder) {
          this.addLink({ query: to.query.folder })
        }
      } else {
        this.updateUpdatedLinks();
      }
    },
  },
  methods: {
    ...mapMutations([
      "updateUpdatedLinks",
      "addLink",
    ]),
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
}

</style>

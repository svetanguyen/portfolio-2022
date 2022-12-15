<template>
  <div
    class="main min-h-page overflow-hidden py-11 lg:py-24 mx-auto px-6 lg:px-25 relative h-full-screen-mob lg:h-full-screen"
  >
    <files-component class="absolute left-8 top-8 lg:top-20" :files="files" />
    <window-component
      v-for="(tab, index) in tabs"
      :key="index"
      :query="tab.query"
      :minimized="tab.minimized"
      :index="index"
      :title="tab.title"
      :icon="tab.icon"
      :closed="tab.closed"
      :hide-sidebar="tab.hideSidebar"
      :window-width="windowWidth"
      :disable-maximize="tab.disableMaximize"
      :small="tab.small"
      :opened-windows="openedWindows"
      :opened-file="openedFile"
      :folder="tab.folder"
      :is-file="tab.isFile"
      class="bg-white"
      @unminimize="onUnMinimize"
    >
      <component v-if="tab.component" :is="tab.component" />
    </window-component>
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
import CalculatorComponent from "../components/Calculator.vue";
import HelloComponent from "../components/Folders/Hello.vue";
import PortfolioComponent from "../components/Window/MyPortfolio.vue";
import AboutComponent from "../components/Folders/About/About.vue";
import WorksComponent from "../components/Folders/Works/Works.vue";
import ContactComponent from "../components/Folders/Contact.vue";
import InfoComponent from "../components/Folders/About/Info.vue";
import SkillsComponent from "../components/Folders/About/Skills.vue";
import WorksList from "../components/Folders/Works/WorksList.vue";

export default {
  name: "home-page",
  components: {
    WindowComponent,
    TaskbarComponent,
    FilesComponent,
    CalculatorComponent,
    HelloComponent,
    PortfolioComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    InfoComponent,
    SkillsComponent,
    WorksList
  },
  data() {
    return {
      openedWindows: this.$route?.query?.open || "",
      openedFile: this.$route?.query?.file || "",
      windowWidth: 0,
      files: [
        {
          name: "My portfolio",
          maximized: true,
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
        open: this.$route.query?.open || "hello",
        file: this.$route.query.file,
        active: this.$route.query?.open || this.$route.query?.file
      },
    });
    this.openedWindows = this.$route?.query?.open || "hello";
  },
  watch: {
    $route(to, from) {
      this.openedWindows = to.query.open;
      if (!this.updatedLinks) {
        if (from.query.open && from.query.open !== to.query.open) {
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
      console.log('this.$route.query.file', this.$route.query.file)
      this.$router.push({
        path: this.$route.path,
        query: { max: this.$route.query?.max, open: !this.tabs[index].isFile ? this.tabs[index].query : this.$route.query?.open, file: this.tabs[index].isFile ? this.tabs[index].query : this.$route.query.file, active: this.tabs[index].query },
      });
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

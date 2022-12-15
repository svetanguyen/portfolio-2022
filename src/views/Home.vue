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
      :openedWindows="openedWindows"
      :folder="tab.folder"
      class="bg-white"
      @minimize="onMinimize"
      @unminimize="onUnMinimize"
      @close="onClose"
      @open="onOpen"
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
  },
  data() {
    return {
      openedWindows: this.$route?.query?.open || "",
      windowWidth: 0,
      tabs: [
        {
          query: "hello",
          icon: "notepad.png",
          minimized: false,
          title: "Hello",
          closed: false,
          component: HelloComponent,
        },
        {
          query: "portfolio",
          icon: "computer.png",
          minimized: false,
          title: "My portfolio",
          closed: true,
          component: PortfolioComponent,
        },
        {
          query: "about",
          icon: "computer.png",
          minimized: false,
          title: "About me",
          closed: true,
          component: AboutComponent,
        },
        {
          query: "info",
          icon: "notepad.png",
          minimized: false,
          title: "Info",
          closed: true,
          component: InfoComponent,
          folder: "About me",
        },
        {
          query: "skills",
          icon: "notepad.png",
          minimized: false,
          title: "Skills",
          closed: true,
          component: SkillsComponent,
          folder: "About me",
        },
        {
          query: "works",
          icon: "folder.png",
          minimized: false,
          title: "Works",
          closed: true,
          component: WorksComponent,
        },
        {
          query: "worksList",
          icon: "notepad.png",
          minimized: false,
          title: "Projects",
          closed: true,
          component: WorksList,
          folder: "Works",
        },
        {
          query: "contact",
          icon: "files.png",
          minimized: false,
          title: "Contact",
          closed: true,
          component: ContactComponent,
        },
        {
          query: "calculator",
          icon: "calculator.png",
          minimized: false,
          title: "Calculator",
          closed: true,
          component: CalculatorComponent,
          hideSidebar: true,
          disableMaximize: true,
          small: true,
        },
      ],
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
      filesMobile: [
        {
          name: "My portfolio",
          icon: "computer.png",
          query: "portfolio",
        },
        { name: "Hello", icon: "notepad.png", query: "hello" },
        {
          query: "about",
          icon: "computer.png",
          name: "About me",
        },
        {
          query: "works",
          icon: "computer.png",
          name: "About me",
        },
        {
          query: "contact",
          icon: "computer.png",
          name: "About me",
        },
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
    ...mapState(["updatedLinks"]),
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
    this.$router.push({
      path: this.$route.path,
      query: {
        max: this.$route.query?.max,
        open: this.$route.query?.open || "hello",
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
    ]),
    onUnMinimize(index) {
      this.tabs[index].minimized = false;
      this.$router.push({
        path: this.$route.path,
        query: { max: this.$route.query?.max, open: this.tabs[index].query },
      });
    },
    onMinimize(index) {
      this.tabs[index].minimized = true;
    },
    onClose(index) {
      this.tabs[index].closed = true;
    },
    onOpen(index) {
      this.tabs[index].closed = false;
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

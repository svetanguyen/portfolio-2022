<template>
  <div
    class="main min-h-page overflow-hidden py-11 lg:py-24 max-w-container mx-auto px-6 lg:px-25 relative"
    :class="{ 'h-full-screen-mob lg:h-full-screen': screenHeightBody }"
  >
    <files-component class="absolute left-8 top-8 lg:top-20" :files="files" />
    <window-component
      v-for="(tab, index) in tabs"
      :key="index"
      :query="tab.query"
      @minimize="onMinimize"
      :minimized="tab.minimized"
      @close="onClose"
      @open="onOpen"
      :index="index"
      class="bg-white"
      :title="tab.title"
      :icon="tab.icon"
      :closed="tab.closed"
      :hide-sidebar="tab.hideSidebar"
      @unminimize="onUnMinimize"
      :window-width="windowWidth"
      :openedWindows="openedWindows"
      :class="{'lg:h-[330px]': tab.height === 'sm', 'lg:h-[70vh]': tab.height !== 'sm'}"
    >
      <component
        v-if="tab.component"
        :is="tab.component"
        @open="onOpen"
        :query="tab.query"
        :window-width="windowWidth"
      />
    </window-component>
  </div>
  <taskbar-component :window-width="windowWidth" :tabs="tabs" @unMinimize="onUnMinimize" />
</template>

<script>
import TaskbarComponent from "../components/Taskbar.vue";
import WindowComponent from "../components/Window/Window.vue";
import { mapState } from "vuex";
import FilesComponent from "../components/Files.vue";
import CalculatorComponent from "../components/Calculator.vue";
import HelloComponent from "../components/Folders/Hello.vue";
import PortfolioComponent from "../components/Window/MyPortfolio.vue";
import AboutComponent from "../components/Folders/About/About.vue";
import WorksComponent from "../components/Folders/Works/Works.vue";
import ContactComponent from "../components/Folders/Contact.vue";
import InfoComponent from "../components/Folders/About/Info.vue";
import SkillsComponent from "../components/Folders/About/Skills.vue";
import LinksComponent from "../components/Folders/About/Links.vue";
import WorksList from "../components/Folders/Works/WorksList.vue";

export default {
  name: "home-page",
  components: {
    WindowComponent,
    TaskbarComponent,
    FilesComponent,
  },
  computed: {
    ...mapState(["screenHeightBody"]),
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
    this.$router.push({ path: this.$route.path, query: { max: this.$route.query?.max, 'open[]': this.$route?.query && this.$route?.query["open[]"] ? [...new Set([...this.$route?.query["open[]"], 'hello'])]: ["hello"] }})
    this.openedWindows = this.$route?.query && this.$route?.query["open[]"] ? [...new Set([...this.$route?.query["open[]"], 'hello'])]: []
  },
  watch: {
    $route(to) {
      this.openedWindows = [...new Set(to.query['open[]'])]
    },
  },
  data() {
    return {
      openedWindows: this.$route?.query && this.$route?.query["open[]"] ? [...new Set(this.$route?.query["open[]"])] : [],
      tabs: [
        {
          query: "hello",
          icon: "notepad.png",
          minimized: false,
          title: "Hello",
          closed: false,
          component: HelloComponent,
          height: 'sm'
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
        },
        {
          query: "skills",
          icon: "notepad.png",
          minimized: false,
          title: "Skills",
          closed: true,
          component: SkillsComponent,
        },
        {
          query: "links",
          icon: "notepad.png",
          minimized: false,
          title: "Links",
          closed: true,
          component: LinksComponent,
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
          title: "Works",
          closed: true,
          component: WorksList,
          hideSidebar: true,
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
          icon: "notepad.png",
          minimized: false,
          title: "Calculator",
          closed: true,
          component: CalculatorComponent,
          hideSidebar: true
        },
      ],
      files: [
        { name: "My portfolio", maximized: true, icon: "computer.png", query: "portfolio" },
        { name: "Hello", icon: "notepad.png", query: "hello" },
        { name: "Resume", icon: "notepad.png", query: "hello", externalLink: 'https://drive.google.com/file/d/1FTlAMC4kJaolMn6h2vkj6Kh0y1_lXHJk/view?usp=sharing' },
      ],
    };
  },
  methods: {
    onUnMinimize(index) {
      this.tabs[index].minimized = false;
      this.$router.push({ path: this.$route.path, query: {max: this.$route.query?.max, 'open[]': [...new Set([...this.openedWindows, this.tabs[index].query])] }})
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
  background: url("../assets/images/bg-1.png") no-repeat 0 0 / cover;
}
@media screen and (min-width: 1024px) {
  .main {
    background: url("../assets/images/bg-1.png") no-repeat 0 0 / cover;
  }
}
</style>

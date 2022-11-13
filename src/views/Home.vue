<template>
  <div
    class="main min-h-page overflow-hidden py-11 lg:py-24 max-w-container mx-auto px-6 lg:px-25 relative"
    :class="{ 'h-full-screen-mob lg:h-full-screen': screenHeightBody }"
  >
    <files-component :files="files" @open="onOpen" />
    <div class="relative">
      <div
        v-if="!tabs[0].minimized && !tabs[0].closed"
        class="mx-auto lg:w-3/5"
      >
        <window-component
          query="hello"
          @minimize="onMinimize"
          :minimized="tabs[0].minimized"
          @close="onClose"
          :index="0"
          class="bg-white"
          title="Hello"
          :icon="tabs[0].icon"
          :closed="tabs[0].closed"
        >
          <div :class="{ 'lg:max-w-[60%] mx-auto py-10': screenHeightBody }">
            <img
              class="lg:hidden pb-6 block max-h-[251px] w-full object-cover"
              :src="require(`../assets/images/profile.jpg`)"
              alt="profile"
            />
            <p
              class="px-4 lg:px-0 mb-6 lg:mb-10 text-lg leading-[1.4] lg:text-2xl"
            >
              My name is Sveta. I am a Front-End Web Developer passionate about creating
              interactive applications and experiences on the web.
            </p>
            <div class="px-4 lg:px-0 flex items-center justify-center lg:gap-7">
              <router-link
                class="w-1/2 lg:w-auto text-center rounded-lg bg-button-gray shadow-sm text-lg py-3 px-2 lg:px-[18px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
                :to="{ name: 'About' }"
                >More about me</router-link
              >
              <router-link
                class="w-1/2 lg:w-auto text-center text-lg py-3 px-2 lg:px-[18px] hover:translate-x-[2px] hover:translate-y-[2px]"
                :to="{ name: 'Works' }"
                >My works</router-link
              >
            </div>
          </div>
        </window-component>
      </div>
    </div>
          <div class="max-w-[600px] mx-auto mt-10">

    <window-component
      query="calculator"
      @minimize="onMinimize"
      :minimized="tabs[1].minimized"
      @close="onClose"
          :index="1"
          class="bg-white"
          title="Calculator"
          :icon="tabs[1].icon"
          :closed="tabs[1].closed"
          >
      <calculator-component />
    </window-component>
          </div>
  </div>
  <taskbar-component :tabs="tabs" @unMinimize="onUnMinimize" />
</template>

<script>
import TaskbarComponent from "../components/Taskbar.vue";
import WindowComponent from "../components/Window/Window.vue";
import { mapState } from "vuex";
import FilesComponent from "../components/Files.vue";
import CalculatorComponent from "../components/Calculator.vue"
export default {
  name: "home-page",
  components: {
    WindowComponent,
    TaskbarComponent,
    FilesComponent,
    CalculatorComponent
  },
  computed: {
    ...mapState(["screenHeightBody"]),
  },
  data() {
    return {
      tabs: [
        {
          icon: "notepad.png",
          minimized: false,
          title: "Hang_Nguyen",
          closed: false,
        },
        {
          icon: "notepad.png",
          minimized: false,
          title: "Calculator",
          closed: false,
        },
      ],
      files: [{ name: "Hello", icon: "notepad.png" }],
    };
  },
  methods: {
    onUnMinimize(index) {
      this.tabs[index].minimized = false;
    },
    onMinimize(index) {
      this.tabs[index].minimized = true;
    },
    onClose(index) {
      this.tabs[index].closed = true;
    },
    onOpen(index) {
      this.tabs[index].closed = false;
      this.tabs[index].minimized = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: url("../assets/images/bg-1.png") no-repeat
    0 0/cover;
}
@media screen and (min-width: 1024px) {
  .main {
    background: url("../assets/images/bg-1.png") no-repeat 0 0/cover;
  }
}
</style>

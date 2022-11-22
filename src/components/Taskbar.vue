<template>
  <div
    :style="{ position: position }"
    class="left-0 w-full bg-pink-light p-4 bottom-0 relative shadow-sm flex z-10 justify-between taskbar"
  >
    <navigation-component :windowWidth="windowWidth" v-if="showNav" />
    <div class="flex h-full">
      <input
        type="checkbox"
        name="Nav"
        id="Nav"
        class="hidden"
        v-model="showNav"
      />
      <label
        for="Nav"
        class="shadow-sm cursor-pointer rounded-lg bg-pink-light flex items-center py-2.5 px-6 gap-2"
        :class="{ '!shadow-lg': showNav }"
      >
        <computer-icon /> Start
      </label>
      <div :key="index" v-for="(tab, index) in tabs">
        <div v-if="tab.minimized" class="mx-1 h-full">
          <button
            class="flex shadow-sm rounded-lg hover:shadow-lg gap-2 justify-center lg:justify-start items-center text-sm lg:text-[25px] leading-none h-full px-3 max-w-[60px] lg:max-w-[213px] text-left"
            @click="unMinimize(index)"
          >
            <img
              class="w-6"
              :src="require(`../assets/images/${tab.icon}`)"
              :alt="alt"
            />
            <p class="hidden lg:block">
              {{ tab.title }}
            </p>
          </button>
        </div>
      </div>
    </div>
    <div class="flex gap-8 flex-grow justify-end items-center">
      <social-icons class="gap-3 lg:gap-6" />
      <div class="hidden text-[18px] leading-none lg:flex flex-col gap-2">
        <p class="font-sans">@ Hang_Nguyen 2022</p>
        <p class="font-sans">Design: Tin Bui</p>
      </div>
    </div>
  </div>
</template>

<script>
import ComputerIcon from "../icons/Computer.vue";
import SocialIcons from "./SocialIcons.vue";
import NavigationComponent from "./Navigation.vue";
export default {
  name: "taskbar-component",
  props: ["tabs", "windowWidth"],
  components: {
    ComputerIcon,
    NavigationComponent,
    SocialIcons,
  },
  data() {
    return {
      bottom: 0,
      position: "fixed",
      showNav: false,
    };
  },
  watch: {
    $route() {
      this.showNav = false;
    },
  },
  methods: {
    unMinimize(index) {
      this.$emit("unMinimize", index);
    },
    toggleShowNav(event) {
      console.log("event.target", event.target.tabIndex);
      // this.showNav = event.target.focus
    },
  },
};
</script>

<style lang="scss">
.taskbar {
  // cursor: url("../assets/images/cursor.png"), auto;
}
</style>

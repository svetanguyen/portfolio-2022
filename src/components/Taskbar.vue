<template>
  <div
    :style="{ position: position }"
    class="left-0 w-full bg-pink-light p-4 bottom-0 relative shadow-sm flex justify-between"
  >
    <navigation-component v-if="showNav" />
    <div class="flex h-full">
      <input type="checkbox" name="Nav" id="Nav" class="hidden" v-model="showNav"/>
      <label
        for="Nav"
        class="shadow-sm cursor-pointer rounded-lg bg-pink-light flex items-center py-2.5 px-6  gap-2"
        :class="{'!shadow-lg': showNav}"
      >
        <computer-icon /> Start
      </label>
      <div class="mx-2" :key="index" v-for="(tab, index) in tabs">
        <button
          class="flex shadow-sm rounded-lg hover:shadow-lg gap-2 justify-center lg:justify-start items-center text-sm lg:text-[25px] leading-none h-full px-3 w-[60px] lg:w-[213px] text-left"
          @click="unMinimize(index)"
          v-if="tab.minimized"
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
    <div class="hidden lg:flex gap-8">
      <social-icons class="lg:gap-6" />
      <div class="text-[18px] leading-none flex flex-col gap-2">
        <p class="font-sans">@ Hang_Nguyen 2022</p>
        <p class="font-sans">Design: Tin Bui</p>
      </div>
    </div>
  </div>
</template>

<script>
import ComputerIcon from "../icons/Computer.vue";
import SocialIcons from "./SocialIcons.vue";
import NavigationComponent from "./Navigation.vue"
export default {
  name: "taskbar-component",
  props: ["tabs"],
  components: {
    ComputerIcon,
    NavigationComponent,
    SocialIcons,
  },
  data() {
    return {
      mobile: null,
      windowWidth: null,
      bottom: 0,
      position: "fixed",
      showNav: false
    };
  },
  created() {
    this.checkScreen();
    window.addEventListener("resize", this.checkScreen);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (
        this.mobile &&
        window.innerHeight + window.pageYOffset >=
          document.body.offsetHeight - 375
      ) {
        this.position = "sticky";
      } else {
        this.position = "fixed";
      }
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
    unMinimize(index) {
      this.$emit("unMinimize", index);
    },
    toggleShowNav(event) {
      console.log('event.target', event.target.tabIndex)
      // this.showNav = event.target.focus
    }
  },
};
</script>

<style lang="scss"></style>

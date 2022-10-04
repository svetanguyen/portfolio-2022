<template>
  <div
    v-if="!minimized && !closed"
    class="shadow-sm rounded-2xl overflow-hidden"
    :class="{'lg:h-full-screen fixed top-[106px] left-0 w-full': maximized}"
  >
    <div
      class="flex items-center justify-between bg-pink-light mt-0.5 mr-1 ml-0.5 rounded-t-2xl"
    >
      <div class="flex items-center gap-x-2.5 mt-1 mx-0.5">
        <img :src="require(`../../assets/images/heart.png`)" alt="heart" />
        <h4 class="text-[17px] lg:text-[25px] leading-none font-serif">
          {{ title }}
        </h4>
      </div>
      <div class="flex">
        <minimize-icon @click="minimize(index)" class="opacity-40 cursor-pointer" />
        <maximize-icon @click="updateMaximize" class="opacity-40 cursor-pointer" />
        <close-window class="opacity-40 cursor-pointer" />
      </div>
    </div>
    <div
      class="font-normal py-6 px-2 text-lg leading-snug mr-1 mb-1 ml-0.5 rounded-b-2xl lg:py-14 lg:px-16 text-[25px]"
      :class="{'flex h-full-screen-container': maximized}"
    >
      <sidebar-component v-if="maximized" class="hidden lg:block w-1/3 overflow-y-scroll overflow-x-hidden" />
      <div class="overflow-scroll">
      <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MinimizeIcon from "../../icons/Minimize.vue";
import MaximizeIcon from "../../icons/Maximize.vue";
import CloseWindow from "../../icons/CloseWindow.vue";
import SidebarComponent from './Sidebar.vue'
export default {
  name: "window-component",
  data() {
    return {
      maximized: false
    }
  },
  props: ["title", "minimized", "closed", "index"],
  components: {
    MinimizeIcon,
    MaximizeIcon,
    CloseWindow,
    SidebarComponent
  },
  methods: {
    minimize(index) {
      this.$emit('minimize', index)
      console.log('aaa')
    },
    updateMaximize() {
      this.maximized = !this.maximized
      this.$store.commit('updateScreenHeightBody', this.maximized)
    }
  }
};
</script>

<style lang="scss"></style>

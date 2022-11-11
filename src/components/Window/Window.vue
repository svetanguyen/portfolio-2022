<template>
  <div
    v-if="!minimized && !closed"
    class="shadow-sm rounded-2xl overflow-hidden transition-all"
    :class="{
      'h-full-screen-mob lg:h-full-screen !m-0 !max-w-none !fixed top-0 lg:top-0 left-0 w-full z-10':
        maximized,
    }"
  >
    <div
      class="flex items-center justify-between bg-pink-light mt-0.5 mr-1 ml-0.5 rounded-t-2xl"
    >
      <div class="flex items-center gap-x-2.5 mt-1 mx-0.5">
        <img class="w-6" :src="require(`../../assets/images/${icon}`)" alt="heart" />
        <h4 class="text-[17px] lg:text-[25px] leading-none font-serif">
          {{ title }}
        </h4>
      </div>
      <div class="flex">
        <minimize-icon
          @click="minimize(index)"
          class="opacity-40 cursor-pointer"
        />
        <maximize-icon
          @click="updateMaximize"
          class="opacity-40 cursor-pointer"
        />
        <close-window @click="onClose(index)" class="opacity-40 cursor-pointer" />
      </div>
    </div>
    <div
      class="font-normal py-6 px-2 text-lg leading-snug mr-1 mb-1 ml-0.5 rounded-b-2xl lg:py-14 lg:px-16 text-[25px]"
      :class="{
        'flex h-full-screen-container-mob lg:h-full-screen-container bg-pink-light lg:!px-3 lg:!py-2':
          maximized,
      }"
    >
      <sidebar-component
        v-if="maximized"
        class="hidden lg:block w-1/3 overflow-hidden"
      />
      <div :class="{ 'flex-grow lg:ml-5 overflow-hidden': maximized }">
        <div v-if="maximized" class="bg-pink-light mb-1">
          <p
            class="rounded-lg shadow-xl-hovered py-1 px-3 text-xl leading-snug opacity-80"
          >
            Content
          </p>
        </div>
        <div
          :class="{
            'bg-white p-5 py-[2px] flex-grow overflow-scroll h-window-content shadow-lg':
              maximized,
          }"
        >
          <div class="h-full w-full py-3">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MinimizeIcon from "../../icons/Minimize.vue";
import MaximizeIcon from "../../icons/Maximize.vue";
import CloseWindow from "../../icons/CloseWindow.vue";
import SidebarComponent from "./Sidebar.vue";
import { mapState } from "vuex";
export default {
  name: "window-component",
  data() {
    return {
      maximized: false,
    };
  },
  props: ["title", "minimized", "closed", "index", "query", "icon"],
  components: {
    MinimizeIcon,
    MaximizeIcon,
    CloseWindow,
    SidebarComponent,
  },
  computed: {
    ...mapState(["screenHeightBody"]),
  },
  created() {
    if (this.$route.query.max === this.query) {
      this.onMaximize();
    }
    if (!this.$route.query.max) {
      this.onRestore();
    }
  },
  watch: {
    $route(to) {
      if (to.query.max === this.query) {
        this.onMaximize();
      }
      if (!to.query.max) {
        this.onRestore();
      }
    },
  },
  methods: {
    minimize(index) {
      this.$emit("minimize", index);
      this.onRestore();
    },
    onClose(index) {
      this.$emit("close", index);
      this.onRestore();
    },
    onMaximize() {
      this.maximized = true;
      this.$store.commit("updateScreenHeightBody", this.maximized);
      document.body.style.overflow = "hidden";
    },
    onRestore() {
      this.maximized = false;
      this.$store.commit("updateScreenHeightBody", false);
      document.body.style.overflow = "auto";
    },
    updateMaximize() {
      this.maximized = !this.maximized;
      this.$store.commit("updateScreenHeightBody", this.maximized);
      if (this.maximized) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    },
  },
};
</script>

<style lang="scss"></style>

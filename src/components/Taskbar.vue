<template>
  <div
    :style="{ position: position }"
    class="left-0 w-full bg-pink-light p-4 bottom-0 relative shadow-sm flex z-50 justify-between taskbar"
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
        <div v-if="!tab.closed && ((tab.isFile && currentFile) || (!tab.isFile && currentFolder))" class="mx-1 h-full">
          <button
            class="flex shadow-sm rounded-lg hover:shadow-lg gap-2 justify-center lg:justify-start items-center text-sm lg:text-[25px] leading-none h-full px-3 max-w-[60px] lg:max-w-[213px] text-left"
            @click="unMinimize(index)"
            aria-label="unminimize"
          >
            <img
              class="w-6"
              :src="require(`../assets/images/${tab.isFile ? currentFile?.icon : currentFolder?.icon}`)"
              :alt="tab.isFile ? currentFile?.alt : currentFolder?.alt"
              width="30"
              height="30"
            />
            <p class="hidden lg:block">
              {{ tab.isFile ? currentFile?.title : currentFolder?.title }}
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
import {mapMutations,mapState} from 'vuex'

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
      currentFile: {},
      currentFolder: {}
    };
  },
  computed: {
    ...mapState(["folders", "files"]),
  },
  created() {
    this.currentFile = this.files.find(file => file.query === this.$route.query.file)
    this.currentFolder = this.folders.find(folder => folder.query === this.$route.query.folder)
  },
  watch: {
    $route(to) {
      this.currentFile = this.files.find(file => file.query === to.query.file)
      this.currentFolder = this.folders.find(folder => folder.query === to.query.folder)
      this.showNav = false;
    },
  },
  methods: {
    ...mapMutations(["toggleMinimize"]),
    unMinimize(index) {
      const openedWindowType = index === 0 ? 'file' : 'folder'
      this.$emit("unMinimize", index);
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          max: this.$route.query.max && !this.currentFile.disableMaximize ? openedWindowType : '',
          active: openedWindowType
        }
      })
    },
  },
};
</script>

<style lang="scss">
.taskbar {
  // cursor: url("../assets/images/cursor.png"), auto;
}
</style>

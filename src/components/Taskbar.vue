<template>
  <div
    :style="{ position: position }"
    class="left-0 w-full bg-pink-light px-4 py-2 bottom-0 relative shadow-sm flex z-50 justify-between taskbar"
  >
    <navigation-component :windowWidth="windowWidth" v-if="showNav" />
    <div class="flex h-full">
      <button class="shadow-sm cursor-pointer bg-pink-light flex items-center py-1 px-6 gap-2"
        :class="{ '!shadow-lg': showNav }" @click.stop="toggleNav">
        <computer-icon /> Start
      </button>
      <div :key="index" v-for="(tab, index) in tabs">
        <div v-if="!tab.closed && ((tab.type === 'file' && currentFile) || (tab.type === 'folder' && currentFolder))" class="mx-1 h-full">
          <button
            class="flex shadow-sm hover:shadow-lg gap-2 justify-center lg:justify-start items-center text-sm lg:text-lg leading-none h-full px-3 max-w-[60px] lg:max-w-[213px] text-left"
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
        <a href="https://www.behance.net/mishadistin" target="_blank" rel="noreferrer noopener" class="font-sans">Design: Tin Bui</a>
      </div>
    </div>
  </div>
</template>

<script>
import ComputerIcon from "../icons/Computer.vue";
import SocialIcons from "./SocialIcons.vue";
import NavigationComponent from "./Navigation.vue";
import {mapMutations, mapState} from 'vuex'

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
    document.addEventListener('click', () => {
      this.closeNav()
    })
  },
  watch: {
    $route(to) {
      this.currentFile = this.files.find(file => file.query === to.query.file)
      this.currentFolder = this.folders.find(folder => folder.query === to.query.folder)
      this.showNav = false;
    },
  },
  methods: {
    ...mapMutations(["unminimize"]),
    unMinimize(index) {
      const openedWindowType = index === 0 ? 'file' : 'folder'
      this.unminimize({index: index})
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          max: this.$route.query.max && !this.currentFile.disableMaximize ? openedWindowType : '',
          active: openedWindowType
        }
      })
    },
    toggleNav() {
      this.showNav = !this.showNav
    },
    closeNav() {
      this.showNav = false
    }
  },
};
</script>

<style>
</style>

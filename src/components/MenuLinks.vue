<template>
  <ul class="min-w-[150px]">
    <li v-for="(link, index) in menuLinks" :key="index">
      <button
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] hover:bg-dark-pink w-full"
        @click="unMinimize(index)"
        :aria-label="`open ${link.title}`"
        type="button"
      >
        <img
          class="w-7"
          :src="require(`../assets/images/${link.icon}`)"
          :alt="link.alt"
          width="30"
          height="30"
        />
        <span>{{link.title}}</span>
      </button>
    </li>
  </ul>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "menu-links",
  props: ["windowWidth"],
  data() {
    return {
      route: this.$route,
      menuLinks: [
        {
          query: 'about',
          icon: 'heart.png',
          alt: 'heart',
          title: 'About',
          isFile: false
        },
        {
          query: 'works',
          icon: 'folder.png',
          alt: 'folder',
          title: 'Works',
          isFile: false
        },
        {
          query: 'contact',
          icon: 'files.png',
          alt: 'files',
          title: 'Contacts',
          isFile: true,
          disableMaximize: true
        },
        {
          query: 'calculator',
          icon: 'calculator.png',
          alt: 'calculator',
          title: 'Calculator',
          isFile: true,
          disableMax: true
        },
        {
          query: 'notepad',
          icon: 'calculator.png',
          alt: 'notepad',
          title: 'Notepad',
          small: false,
          isFile: true
        },
      ]
    };
  },
  methods: {
    ...mapMutations(["unminimize"]),
    unMinimize(index) {
      const openedWindowType = this.menuLinks[index].isFile ? 'file' : 'folder'
      this.$router.push({
        path: this.$route.path,
        query: {
          max: this.$route.query.max && !this.currentFile.disableMaximize ? openedWindowType : '',
          folder: !this.menuLinks[index].isFile ? this.menuLinks[index].query : this.$route.query.folder,
          file: this.menuLinks[index].isFile ? this.menuLinks[index].query : this.$route.query.file,
          active: openedWindowType
        }
      })
      this.unminimize({index: this.menuLinks[index].isFile ? 0 : 1})
    },
  }
};
</script>

<style lang="scss"></style>

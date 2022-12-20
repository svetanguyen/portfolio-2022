<template>
  <ul>
    <li
      class="text-center w-[80px] text-white underline text-[17px] leading-snug mb-4"
      v-for="(file, index) in files"
      :key="index"
    >
      <button aria-label="open file" tabindex="0" @click="onOpen(index)" v-if="!file.externalLink">
        <img
          class="mx-auto mb-2 h-[50px] object-contain"
          :src="require(`../assets/images/${file.icon}`)"
          :alt="file.title"
          width="60"
          height="60"
        />
        <p :class="{ 'text-black': text === 'black' }">
          {{ file.title }}
        </p>
      </button>
      <a
        class="no-underline"
        :href="file.externalLink"
        target="_blank"
        rel="noopener noreferrer"
        v-else
      >
        <div class="relative mb-2 mx-auto h-[50px]">
          <img
            class="h-full mx-auto object-contain"
            :src="require(`../assets/images/${file.icon}`)"
            :alt="file.alt"
             width="60"
            height="60"
          />
          <link-icon class="absolute w-4 h-4 left-3 -bottom-1" />
        </div>
        <p :class="{ 'text-black': text === 'black' }">
          {{ file.title }}
        </p>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from 'vuex';
import LinkIcon from "../icons/Link.vue";
export default {
  name: "files-component",
  props: ["files", "text", "isFile"],
  components: {
    LinkIcon,
  },
  methods: {
    ...mapMutations(["unminimize"]),
    onOpen(index) {
      this.$router.push({
        path: "/",
        query: {
          max: (this.$route.query.max && !this.files[index].disableSidebar) ? (this.files[index].isFile ? 'file' : 'folder') : '',
          folder: !this.files[index].isFile ? this.files[index].query : this.$route.query.folder,
          file: this.files[index].isFile ? this.files[index].query : this.$route.query.file,
          active: this.files[index].isFile ? 'file' : 'folder'
        },
      });
      this.unminimize({index: this.files[index].isFile ? 0 : 1})
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  &:focus {
    p {
      background: #328adb;
      color: #fff;
    }
  }
}
</style>

<template>
  <ul>
      <li
        class="text-center text-white underline text-[17px] leading-snug mb-4"
        v-for="(file, index) in files"
        :key="index"
      >
        <button
          tabindex="0"
          @click="onOpen(index)"
          v-if="!file.externalLink"
        >
          <img
            class="mx-auto mb-2 w-12"
            :src="require(`../assets/images/${file.icon}`)"
            :alt="file.name"
          />
          <p :class="{'text-black': text === 'black'}">
            {{ file.name }}
          </p>
        </button>
        <a class="no-underline" :href="file.externalLink" target="_blank" rel="noopener noreferrer" v-else>
          <div class="relative mb-2 mx-auto w-12">
            <img
              class="w-full"
              :src="require(`../assets/images/${file.icon}`)"
              :alt="file.name"
            />
            <link-icon class="absolute w-4 h-4 left-0 bottom-0"/>
          </div>
          <p :class="{'text-black': text === 'black'}">
            {{ file.name }}
          </p>
        </a>
      </li>
  </ul>
</template>

<script>
import LinkIcon from '../icons/Link.vue'
export default {
  name: "files-component",
  props: ["files", "text"],
  components: {
    LinkIcon
  },
  methods: {
    onOpen(index) {
      this.$router.push({ path: '/', query: {max: this.files[index].maximized ? this.files[index].query : '' , open: this.files[index].query }})
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

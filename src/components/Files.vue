<template>
  <ul class="absolute left-8 top-8 lg:top-20">
      <li
        class="text-center text-white underline text-[17px] leading-snug mb-4"
        v-for="(file, index) in files"
        :key="index"
      >
        <button
          tabindex="0"
          @click="onOpen(index)"
        >
          <img
            class="mx-auto mb-2"
            :src="require(`../assets/images/${file.icon}`)"
            :alt="file.name"
          />
          <p>
            {{ file.name }}
          </p>
        </button>
      </li>
  </ul>
</template>

<script>
export default {
  name: "files-component",
  props: ["files"],
  data() {
      return {
            windowWidth: null,
      }
  },
  methods: {
    onOpen(index) {
      this.$emit("open", index);
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

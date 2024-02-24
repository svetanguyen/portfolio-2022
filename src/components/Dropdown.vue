<template>
  <div class="relative">
    <button
      class="text-base leading-snug h-full first-letter:underline opacity-80 block py-2 px-3"
      :class="{ 'bg-blue-100 text-white': open }"
      @click="onToggleOpen"
      type="button"
      :aria-label="`toggle ${title} dropdown`"
    >
      {{ title }}
    </button>
    <ul class="absolute top-full left-0" v-if="open">
      <slot />
    </ul>
  </div>
</template>

<script>
export default {
  name: "dropdown-component",
  data() {
    return {
      open: false,
    };
  },
  props: ["title"],
  methods: {
    onToggleOpen() {
      this.open = !this.open;
    },
  },
  watch: {
    $route() {
      this.open = false
    }
  }
};
</script>

<style></style>

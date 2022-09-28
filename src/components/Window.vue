<template>
  <div class="shadow-sm rounded-2xl overflow-hidden">
    <div class="flex items-center justify-between bg-pink-light mt-0.5 mr-1 ml-0.5 rounded-t-2xl">
      <div class="flex items-center gap-x-2.5 mt-1 mx-0.5">
        <img :src="require(`../assets/images/heart.png`)" alt="heart" />
        <h4 class="text-[17px] lg:text-[25px] leading-none font-serif">{{ title }}</h4>
      </div>
      <img
        :src="require(`../assets/images/browser-icons.png`)"
        alt="browser icons"
        class="m-1"
      />
    </div>
    <div class="font-normal	py-6 px-2 text-lg leading-snug mr-1 mb-1 ml-0.5 rounded-b-2xl lg:py-14 lg:px-16 text-[25px]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "window-component",
  props: ["title", ""],
};
</script>

<style lang="scss">
</style>

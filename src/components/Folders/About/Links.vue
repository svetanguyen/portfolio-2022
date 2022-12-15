<template>
  <div class="lg:pt-10">
    <p class="text-center mt-2 lg:mt-0 mb-8 text-base leading-snug">
      Check out my portfolio or contact me!
    </p>
    <div
      class="flex justify-center gap-x-2 lg:gap-x-[52px] lg:px-[109px] max-w-[300px] lg:max-w-none mx-auto"
    >
      <router-link
        class="text-center w-1/2 rounded-lg bg-button-gray shadow-sm text-lg py-3 px-[30px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
        :to="{ name: 'Home', query: { max: 'works', open: 'works', file: $route.query.file, active: 'works' } }"
        >My works</router-link
      >
      <router-link
        class="text-center w-1/2 rounded-lg bg-button-gray shadow-sm text-lg py-3 px-[30px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
        :to="{ name: 'Home', query: { max: 'contact', open: $route.query.open, file: 'contact', active: 'contact' } }"
        >Contact me</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "links-component",
};
</script>

<style></style>

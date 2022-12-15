<template>
  <div
    class="lg:max-w-[60%] mx-auto h-full flex flex-col items-center justify-center"
  >
    <p class="px-4 lg:px-0 mb-6 lg:mb-10 text-lg leading-[1.4] lg:text-2xl">
      My name is Sveta. I am a Front-End Web Developer passionate about creating
      interactive applications and experiences on the web.
    </p>
    <div class="px-4 w-full lg:px-0 flex items-center justify-center lg:gap-7">
      <router-link
        class="w-1/2 lg:w-auto text-center rounded-lg bg-button-gray shadow-sm text-lg py-3 px-2 lg:px-[18px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
        :to="{
          name: 'Home',
          query: {
            max: $route.query.max ? 'about' : '',
            open: 'about',
            file: $route.query.file,
            active: 'about'
          },
        }"
        >More about me</router-link
      >
      <router-link
        class="w-1/2 lg:w-auto text-center text-lg py-3 px-2 lg:px-[18px] hover:translate-x-[2px] hover:translate-y-[2px]"
        :to="{
          name: 'Home',
          query: {
            max: $route.query.max ? 'worksList' : '',
            open: 'worksList',
            file: $route.query.file,
            active: 'worksList'
          },
        }"
        >My works</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloComponent",
};
</script>

<style></style>

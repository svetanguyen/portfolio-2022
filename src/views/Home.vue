<template>
  <div class="min-h-page overflow-hidden py-11 lg:py-24 max-w-container mx-auto px-6 lg:px-25">
    <div class="flex items-center">
      <div class="hidden lg:block rounded-2xl overflow-hidden">
        <img :src="require(`../assets/images/profile.jpg`)" alt="profile" />
      </div>
      <div class="lg:-ml-[82px] mx-auto">
        <window-component class="bg-white" title="Hang_Nguyen">
          <img class="lg:hidden pb-6 block max-h-[251px] w-full object-cover" :src="require(`../assets/images/profile.jpg`)" alt="profile" />
          <p class="px-4 lg:px-0 mb-6 lg:mb-10 text-lg leading-[1.4] lg:text-2xl">
            I am a Front-End Web Developer passionate about creating interactive
            applications and experiences on the web.
          </p>
          <div class="px-4 lg:px-0 flex items-center justify-center lg:gap-7">
            <router-link
              class="w-1/2 lg:w-auto text-center rounded-lg bg-button-gray shadow-sm text-lg py-3 px-2 lg:px-[18px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
              :to="{ name: 'About' }"
              >More about me</router-link
            >
            <router-link class="w-1/2 lg:w-auto text-center text-lg py-3 px-2 lg:px-[18px] hover:translate-x-[2px] hover:translate-y-[2px]" :to="{ name: 'Works' }"
              >My works</router-link
            >
          </div>
        </window-component>
      </div>
    </div>
  </div>
</template>

<script>
import WindowComponent from "../components/Window.vue";
export default {
  name: "home-page",
  components: {
    WindowComponent,
  },
};
</script>

<style lang="scss">
</style>

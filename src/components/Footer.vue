<template>
  <footer class="pt-5 pb-6 shadow-sm bg-pink-light lg:hidden">
    <nav class="max-w-container mx-auto px-6 lg:px-25 w-full">
      <div class="flex items-center justify-between mb-5 lg:hidden">
        <h2 class="text-[39px] leading-none lg:text-[65px]">
          <router-link :to="{ name: 'Home' }">Sveta</router-link>
        </h2>
        <social-icons class="lg:hidden flex gap-4" />
      </div>
      <menu-links class="lg:hidden pb-6 lg:pb-0" />
      <div class="flex items-center justify-between">
        <h3 class="text-black text-lg leading-none">© Hang Nguyen 2022</h3>
        <social-icons class="hidden lg:flex gap-4 lg:gap-8" />
        <h3 class="text-black text-lg leading-non">Design: Tin Bui</h3>
      </div>
    </nav>
  </footer>
</template>

<script>
import MenuLinks from "./MenuLinks.vue";
import SocialIcons from "./SocialIcons.vue";
export default {
  name: "FooterComponent",
  components: {
    SocialIcons,
    MenuLinks,
  },
};
</script>

<style lang="scss"></style>

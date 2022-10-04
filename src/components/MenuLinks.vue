<template>
  <ul>
    <li>
      <router-link
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] lg:p-0"
        :to="{ name: 'Home' }"
      >
        <img :src="require(`../assets/images/heart.png`)" alt="heart" />

        Home
      </router-link>
    </li>
    <li>
      <router-link
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] lg:p-0"
        :to="{ name: 'About' }"
      >
        <img :src="require(`../assets/images/document.png`)" alt="document" />
        About</router-link
      >
    </li>
    <li>
      <router-link
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] lg:p-0"
        :to="{ name: 'Works' }"
      >
        <img :src="require(`../assets/images/folder.png`)" alt="folder" />
        Works</router-link
      >
    </li>
    <li>
      <router-link
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] lg:p-0"
        :to="{ name: 'Contacts' }"
      >
        <img :src="require(`../assets/images/files.png`)" alt="files" />
        Contacts</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "menu-links",
  data() {
    return {
      route: this.$route,
    };
  },
};
</script>

<style lang="scss"></style>

<template>
  <ul class="min-w-[150px]">
    <li v-for="(link, index) in menuLinks" :key="index">
      <router-link
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] hover:bg-dark-pink w-full"
        :to="{
          name: 'Home',
          query: { max: $route.query.max ? link.query : '', open: link.query },
        }"
      >
        <img
          class="w-7"
          :src="require(`../assets/images/${link.img}`)"
          :alt="link.alt"
          width="30"
          height="30"
        />
        <span>{{link.title}}</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "menu-links",
  props: ["windowWidth"],
  data() {
    return {
      route: this.$route,
      menuLinks: [
        {
          query: 'about',
          img: 'heart.png',
          alt: 'heart',
          title: 'About'
        },
        {
          query: 'works',
          img: 'folder.png',
          alt: 'folder',
          title: 'Works'
        },
        {
          query: 'contact',
          img: 'files.png',
          alt: 'files',
          title: 'Contacts'
        },
        {
          query: 'calculator',
          img: 'calculator.png',
          alt: 'calculator',
          title: 'Calculator'
        },
      ]
    };
  },
};
</script>

<style lang="scss"></style>

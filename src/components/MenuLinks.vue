<template>
  <ul class="min-w-[150px]">
    <li>
      <router-link
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] hover:bg-dark-pink w-full"
        :to="{
          name: 'Home',
          query: { max: $route.query.max ? 'about' : '', open: 'about' },
        }"
      >
        <img
          class="w-7"
          :src="require(`../assets/images/heart.png`)"
          alt="document"
          width="30"
          height="30"
        />
        <span>About</span>
      </router-link>
    </li>
    <li>
      <router-link
        class="py-4 px-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] hover:bg-dark-pink w-full"
        :to="{
          name: 'Home',
          query: { max: $route.query.max ? 'works' : '', open: 'works' },
        }"
      >
        <img
          class="w-7"
          :src="require(`../assets/images/folder.png`)"
          alt="folder"
          width="30"
          height="30"
        />
        Works</router-link
      >
    </li>
    <li>
      <router-link
        class="p-4 text-[23px] lg:text-xl leading-none flex gap-3 items-center text-black lg:text-[23px] hover:bg-dark-pink w-full"
        :to="{
          name: 'Home',
          query: { max: $route.query.max ? 'contact' : '', open: 'contact' },
        }"
      >
        <img
          class="w-7"
          :src="require(`../assets/images/files.png`)"
          alt="files"
          width="30"
          height="30"
        />
        Contacts</router-link
      >
    </li>
    <li>
      <router-link
        class="p-4 text-[23px] lg:text-xl leading-none flex items-center text-black lg:text-[23px] hover:bg-dark-pink w-full"
        :to="{ name: 'Home', query: { max: '', open: 'calculator' } }"
      >
        <img
          class="w-7"
          :src="require(`../assets/images/calculator.png`)"
          alt="calculator"
          width="30"
          height="30"
        />
        <span class="ml-3 block">Calculator</span></router-link
      >
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
    };
  },
};
</script>

<style lang="scss"></style>

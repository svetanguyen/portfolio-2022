<template>
  <div class="bg-pink-light shadow-sm fixed top-0 left-0 w-full z-10">
    <header
      class="max-w-container mx-auto py-4 lg:py-5 flex justify-between items-center px-6 lg:px-25"
    >
      <nav class="flex w-full items-center justify-between">
        <h1 class="text-[39px] leading-none lg:text-[65px]">
          <router-link class="no-underline" :to="{ name: 'Home' }"
            >Sveta</router-link
          >
        </h1>
        <menu-links class="hidden lg:flex lg:gap-x-[45px]" />
      </nav>
      <menu-icon @click="toggleMobileNav" class="lg:hidden" />
    </header>
    <transition name="mobile-nav">
      <div
        class="mobile-nav z-10 fixed duration-500 ease-in-out transition-all top-0 left-0 w-full rounded-b-2xl bg-pink-light pr-1 pl-0.5 shadow-sm"
        v-show="mobileNav"
      >
        <div
          class="mobile-nav__header py-3 px-5 max-w-container mx-auto flex items-center justify-between border-b-2 border-b-border-gray"
        >
          <h3 class="text-[46px] leading-none">navigation</h3>
          <close-icon @click="closeMobileNav" />
        </div>
        <menuLinks class="pb-2" />
      </div>
    </transition>
  </div>
</template>

<script>
import menuIcon from "../icons/Menu.vue";
import closeIcon from "../icons/Close.vue";
import menuLinks from "./MenuLinks.vue";
export default {
  name: "header-component",
  data() {
    return {
      mobileNav: this.$store.state.mobileNav,
    };
  },
  watch: {
    $route() {
      this.mobileNav = false;
    },
  },
  components: {
    menuIcon,
    closeIcon,
    menuLinks,
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    closeMobileNav() {
      this.mobileNav = false;
    },
  },
};
</script>

<style lang="scss">
.mobile-nav {
  @media screen and (max-width: 1007px) {
    .link {
      padding-left: 16px;
    }
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 0.5s all ease-in-out;
}
.mobile-nav-enter,
.mobile-nav-leave-to {
  transform: translateY(-100%);
  transition: 0.5s all ease-in-out;
}
</style>

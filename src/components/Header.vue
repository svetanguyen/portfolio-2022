<template>
  <div class="header-wrapper">
    <header class="container">
      <nav class="desktop-nav">
        <h1 class="logo">
          <router-link :to="{ name: 'Home' }">Sveta</router-link>
        </h1>
        <menu-links :mobileShow="false" />
      </nav>
      <menu-icon @click="toggleMobileNav" class="menu-icon" />
    </header>
    <transition name="mobile-nav">
      <div class="mobile-nav" v-show="mobileNav">
        <div class="mobile-nav__header container">
          <h3>navigation</h3>
          <close-icon @click="closeMobileNav" />
        </div>
        <menuLinks :mobileShow="true" />
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
.header-wrapper {
  background: var(--pink-light);
  box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #ffffff,
    inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
  header {
    display: flex;
    width: 100%;
    padding: 16px 20px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .mobile-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--pink-light);
    border-radius: 0px 0px 16px 16px;
    transition: 0.5s all ease-in-out;
    transform: translateY(0);
    padding: 0 4px 0 2px;
    box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #ffffff,
      inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
    &__header {
      padding: 12.5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid var(--border-gray);
    }
    h3 {
      font-size: 46px;
      line-height: 1;
    }
  }
  .link {
    @media screen and (max-width: 1007px) {
      &.router-link-active {
        background: var(--pink);
      }
    }
  }
  @media screen and (min-width: 1008px) {
    .menu-icon {
      display: none;
    }
    header {
      padding: 12px 100px;
    }
    h1 {
      font-size: 65px;
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
}
</style>

<template>
  <div class="home-page page container">
    <div class="intro">
      <div class="intro__image-container column">
        <img :src="require(`../assets/images/profile.jpg`)" alt="profile" />
      </div>
      <div class="intro__content column">
        <window-component title="Hang_Nguyen">
          <img :src="require(`../assets/images/profile.jpg`)" alt="profile" />
          <p>
            I am a Front-End Web Developer passionate about creating interactive
            applications and experiences on the web.
          </p>
          <div class="intro__content-links">
            <router-link
              class="link button button-grey bordered"
              :to="{ name: 'About' }"
              >More about me</router-link
            >
            <router-link class="link button" :to="{ name: 'Works' }"
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
.home-page {
  .intro {
    &__image-container {
      display: none;
    }
    .window-component {
      img {
        margin-bottom: 25px;
        display: block;
        @media screen and (min-width: 1008px) {
          display: none;
        }
      }
    }
    @media screen and (min-width: 1008px) {
      display: flex;
      align-items: center;
      &__image-container {
        display: block;
      }
      .column {
        width: 50%;
        &:last-child {
          margin-left: -82px;
          width: calc(50% + 82px);
        }
      }
    }
    &__content {
      &-links {
        display: flex;
        justify-content: center;
        margin-top: 25px;

        @media screen and (min-width: 1008px) {
          gap: 60px;
        }
      }
    }
  }
  img {
    max-width: 100%;
    border-radius: 16px;
  }
}
</style>

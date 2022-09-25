<template>
  <div class="home-page page container">
    <div class="intro">
      <div class="intro__image-container column">
        <img :src="require(`../assets/images/profile.jpg`)" alt="profile" />
      </div>
      <div class="intro__content column">
        <section-header title="Hang_Nguyen" />
        <div class="intro__content-body">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../components/SectionHeader.vue";
export default {
  name: "home-page",
  components: {
    SectionHeader,
  },
};
</script>

<style lang="scss">
.home-page {
  .intro {
    &__image-container {
      display: none;
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
      box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #ffffff,
        inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
      border-radius: 16px;
      overflow: hidden;

      &-body {
        background: #fff;
        font-weight: 400;
        padding: 24px 9px;
        font-size: 18px;
        line-height: 140%;
        img {
          margin-bottom: 25px;
          display: block;
        }
        p {
          padding: 0 15px;
        }
        @media screen and (min-width: 1008px) {
          padding: 57px 66px;
          font-size: 25px;
        }
        img {
          @media screen and (min-width: 1008px) {
            display: none;
          }
        }
      }
      &-links {
        display: flex;
        justify-content: center;
        margin-top: 25px;

        @media screen and (min-width: 1008px) {
          gap: 60px;
        }
      }
      h4 {
        font-size: 17px;
        line-height: 1;
        font-family: var(--body-font);
        @media screen and (min-width: 1008px) {
          font-size: 25px;
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

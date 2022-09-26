<template>
  <div class="about-page page">
    <div class="container">
      <div class="window-wrapper">
        <window-component title="Hang_Nguyen">
          <div class="text-wrapper">
            <quotes-icon />
            <p>
              I’m a front end developer with experience in developing themes on
              Shopify and a little bit of experience with working on apps
              (VueJS).
            </p>
            <p>
              I am always willing to learn new challenging things and strive to
              grow as developer.
            </p>
            <quotes-icon :reversed="true" />
          </div>

          <div class="links-wrapper">
            <a href="/" class="link button button-grey">Resume</a>
          </div>
        </window-component>
        <div>
          <img
            :src="require(`../assets/images/butterfly.gif`)"
            alt="butterfly"
          />
          <img :src="require(`../assets/images/flower.png`)" alt="flower" />
        </div>
      </div>
      <window-component title="Hang_Nguyen">
        <h2>Skills</h2>
        <div class="skills-wrapper">
          <div v-for="(skill, index) in skills" :key="index">
            <component :is="skill.type" />
            <p>{{ skill.text }}</p>
          </div>
        </div>
      </window-component>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import WindowComponent from "../components/Window.vue";
import QuotesIcon from "../icons/Quotes.vue";
import HtmlIcon from "../icons/Html.vue";
import CssIcon from "../icons/Css.vue";
export default {
  name: "about-page",
  components: {
    WindowComponent,
    QuotesIcon,
    HtmlIcon,
    CssIcon,
  },
  computed: {
    ...mapState(["skills"]),
  },
};
</script>

<style lang="scss">
.about-page {
  overflow: hidden;
  h2 {
      text-align: center;
      margin-bottom: 33px;
      font-size: 40px;
      font-family: var(--body-font);
      font-weight: normal;
      line-height: 1;
      @media screen and (min-width: 1008px) {
          margin-bottom: 91px;
      }
  }
  .window-wrapper {
    position: relative;
    margin-bottom: 45px;
    @media screen and (min-width: 1008px) {
      margin: 0 106px 236px;
    }
    .window-component {
      .text-wrapper {
        position: relative;
        margin-top: 84px;
        margin-bottom: 75px;
        p {
          margin-bottom: 20px;
        }
        @media screen and (min-width: 1008px) {
          margin-bottom: 108px;
          margin-top: 20px;
        }
        svg {
          &:first-of-type {
            position: absolute;
            bottom: calc(100% + 20px);
            left: 0;
          }
          &:last-of-type {
            position: absolute;
            top: calc(100% + 20px);
            right: 0;
          }
          @media screen and (min-width: 1008px) {
            &:first-of-type {
              right: 100%;
              bottom: 100%;
              left: auto;
            }
            &:last-of-type {
              right: auto;
              top: 100%;
              left: 100%;
            }
          }
        }
      }
      &__body {
        background: var(--yellow);
        position: relative;
      }
      a {
        width: 315px;
        margin: 0 auto;
      }
    }

    & > div {
      &:last-child {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(47%, 45%);
        @media screen and (min-width: 1008px) {
          transform: translate(50%, 25%);
        }
        img {
          display: block;
          max-width: 45px;
          margin-left: 80px;
          @media screen and (min-width: 1008px) {
            max-width: 104px;
            margin-left: 190px;
          }
          & + img {
            max-width: 203px;
            margin-left: 0;
            @media screen and (min-width: 1008px) {
              max-width: 460px;
            }
          }
        }
      }
    }
  }
  .window-component {
    position: relative;
    .skills-wrapper {
      display: flex;
    text-align: center;
      flex-wrap: wrap;
      & > div {
        width: 50%;
        @media screen and (min-width: 749px) {
            width: 33.33333%;
        }
        @media screen and (min-width: 1008px) {
          width: 20%;
        }
      }
    }
  }
}
</style>

<template>
  <div class="min-h-page overflow-hidden py-11 relative">
    <img
      class="absolute max-w-[212px] lg:max-w-none -top-3.5 -left-3.5 lg:top-[65px] lg:left-0"
      :src="require(`../assets/images/background.png`)"
      alt="background"
    />
    <div class="max-w-container mx-auto px-6 lg:px-25">
      <div class="lg:pt-[138px] mb-[45px] lg:mx-[106px] lg:mb-[236px] relative">
        <window-component class="bg-yellow" title="Hang_Nguyen">
          <div
            class="relative mt-[84px] mb-[75px] lg:mb-[108px] lg:mt-5 px-2 lg:px-0"
          >
            <quotes-icon
              class="absolute bottom-full -translate-y-[20px] lg:translate-0 left-0 lg:left-auto lg:bottom-full lg:right-full"
            />
            <p class="mb-5">
              I’m a front end developer with experience in developing themes on
              Shopify and a little bit of experience with working on apps
              (VueJS).
            </p>
            <p>
              I am always willing to learn new challenging things and strive to
              grow as developer.
            </p>
            <quotes-icon
              class="absolute right-0 top-full translate-y-[20px]"
              :reversed="true"
            />
          </div>
          <div class="px-2">
            <a
              href="/"
              class="w-[315px] max-w-[168px] lg:max-w-none block mx-auto text-center rounded-lg bg-button-gray shadow-sm text-lg py-3 px-[18px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
              >Resume</a
            >
          </div>
        </window-component>
        <div
          class="absolute bottom-0 right-0 translate-x-[47%] translate-y-[45%] lg:translate-x-1/2 lg:translate-y-1/4"
        >
          <img
            class="block max-w-[45px] ml-20 lg:max-w-[104px] lg:ml-[190px]"
            :src="require(`../assets/images/butterfly.gif`)"
            alt="butterfly"
          />
          <img
            class="block max-w-[203px] lg:max-w-[460px]"
            :src="require(`../assets/images/flower.png`)"
            alt="flower"
          />
        </div>
      </div>
      <window-component
        class="relative bg-white mb-11 lg:mb-[163px]"
        title="Hang_Nguyen"
      >
        <h2
          class="mb-[33px] text-center text-[40px] font-normal leading-none lg:mb-[91px]"
        >
          Skills
        </h2>
        <div class="flex text-center flex-wrap gap-y-10 lg:gap-y-[68px]">
          <div
            class="w-1/2 md:w-1/3 lg:w-1/5"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <component
              :is="skill.type"
              class="mx-auto w-[70x] h-[70px] lg:w-[102px] lg:h-[102px] mb-3 lg:mb-4"
            />
            <p class="font-sans text-lg leading-snug lg:text-4xl">
              {{ skill.text }}
            </p>
          </div>
        </div>
      </window-component>
      <window-component class="bg-white max-w-[715px] mx-auto lg:mb-[75px]" title="Hang_Nguyen">
        <p class="text-center mt-2 lg:mt-0 mb-8 text-base leading-snug">
          Check out my portfolio or contact me!
        </p>
        <div
          class="flex justify-center gap-x-2 lg:gap-x-[52px] lg:px-[109px] max-w-[300px] lg:max-w-none mx-auto"
        >
          <router-link
            class="text-center w-1/2 rounded-lg bg-button-gray shadow-sm text-lg py-3 px-[30px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
            :to="{ name: 'Works' }"
            >My works</router-link
          >
          <router-link
            class="text-center w-1/2 rounded-lg bg-button-gray shadow-sm text-lg py-3 px-[30px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
            :to="{ name: 'Contacts' }"
            >Contact me</router-link
          >
        </div>
      </window-component>
    </div>
    <img
      class="absolute bottom-0 hidden lg:block -right-3"
      :src="require(`../assets/images/books.png`)"
      alt="background"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import WindowComponent from "../components/Window/Window.vue";
import QuotesIcon from "../icons/Quotes.vue";
import HtmlIcon from "../icons/Html.vue";
import CssIcon from "../icons/Css.vue";
import ScssIcon from "../icons/Scss.vue";
import ReactIcon from "../icons/React.vue";
import VueIcon from "../icons/Vue.vue";
import JavascriptIcon from "../icons/Javascript.vue";
import GitIcon from "../icons/Git.vue";
import HydrogenIcon from "../icons/Hydrogen.vue";
import NpmIcon from "../icons/Npm.vue";
import TailwindIcon from "../icons/Tailwind.vue";
export default {
  name: "about-page",
  components: {
    WindowComponent,
    QuotesIcon,
    HtmlIcon,
    CssIcon,
    ScssIcon,
    ReactIcon,
    VueIcon,
    JavascriptIcon,
    GitIcon,
    HydrogenIcon,
    NpmIcon,
    TailwindIcon,
  },
  computed: {
    ...mapState(["skills"]),
  },
};
</script>

<style lang="scss"></style>

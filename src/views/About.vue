<template>
  <div class="min-h-page overflow-hidden py-11 relative">
    <files-component class="flex gap-5 lg:block" @open="onOpen" :files="files" />
    <img
      class="absolute -z-10 select-none max-w-[212px] lg:max-w-none -top-3.5 -left-3.5 lg:top-[65px] lg:left-0"
      :src="require(`../assets/images/background.png`)"
      alt="background"
    />
    <div class="max-w-container mx-auto px-6 mt-14 lg:mt-0 lg:px-25">
      <div class="lg:pt-[138px] mb-[45px] lg:mx-[106px] lg:mb-[236px] relative">
        <window-component
          @minimize="onMinimize"
          :minimized="tabs[0].minimized"
          @close="onClose"
          :index="0"
          query="info"
          class="bg-yellow"
          title="Hang_Nguyen"
          :closed="tabs[0].closed"
          :icon="tabs[0].icon"
        >
          <div class="lg:px-12" :class="{ 'lg:pt-10': screenHeightBody }">
            <div
              class="relative mt-[84px] mb-[75px] lg:mb-[108px] lg:mt-5 px-2 lg:px-0"
            >
              <quotes-icon
                class="absolute bottom-full -translate-y-[20px] lg:translate-0 left-0 lg:left-auto lg:bottom-full lg:right-full"
              />
              <p class="mb-5">
                I’m a front end developer with experience in developing themes
                on Shopify and a little bit of experience with working on apps
                (VueJS).
              </p>
              <p>
                I am always willing to learn new challenging things and strive
                to grow as developer.
              </p>
              <quotes-icon
                class="absolute right-0 top-full translate-y-[20px]"
                :reversed="true"
              />
            </div>
            <div class="px-2">
              <a
                href="https://drive.google.com/file/d/16KGovMJTzdU93VH5AwQmgfJXICvJ5eAx/view?usp=sharing"
                target="_blank"
                class="w-[315px] max-w-[168px] lg:max-w-none block mx-auto text-center rounded-lg bg-button-gray shadow-sm text-lg py-3 px-[18px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
                >Resume</a
              >
            </div>
          </div>
        </window-component>
        <div
          class="absolute bottom-0 right-0 translate-x-[47%] translate-y-[45%] lg:translate-x-1/2 lg:translate-y-1/4"
        >
          <img
            class="block select-none max-w-[45px] ml-20 lg:max-w-[104px] lg:ml-[190px]"
            :src="require(`../assets/images/butterfly.gif`)"
            alt="butterfly"
            v-if="!tabs[0].minimized && !tabs[0].closed"
          />
          <img
            class="block select-none max-w-[203px] lg:max-w-[460px]"
            :src="require(`../assets/images/flower.png`)"
            alt="flower"
            v-if="!tabs[0].minimized && !tabs[0].closed"
          />
        </div>
      </div>
      <window-component
        @minimize="onMinimize"
        :minimized="tabs[1].minimized"
        @close="onClose"
        :index="1"
        query="skills"
        class="relative bg-white mb-11 lg:mb-[163px]"
        title="Hang_Nguyen"
        :icon="tabs[1].icon"
        :closed="tabs[1].closed"
      >
        <div>
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
        </div>
      </window-component>
      <window-component
        @minimize="onMinimize"
        @close="onClose"
        :minimized="tabs[2].minimized"
        :index="2"
        query="links"
        class="bg-white max-w-[715px] mx-auto lg:mb-[75px] relative"
        title="Hang_Nguyen"
        :closed="tabs[2].closed"
        :icon="tabs[2].icon"
      >
        <div :class="{ 'lg:pt-10': screenHeightBody }">
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
        </div>
      </window-component>
    </div>
    <img
      class="absolute select-none bottom-0 hidden lg:block -right-3"
      :src="require(`../assets/images/books.png`)"
      alt="background"
    />
  </div>
  <taskbar-component :tabs="tabs" @unMinimize="onUnMinimize" />
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
import TaskbarComponent from "../components/Taskbar.vue";
import FilesComponent from "../components/Files.vue";
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
    TaskbarComponent,
    FilesComponent,
  },
  computed: {
    ...mapState(["skills", "screenHeightBody"]),
  },
  data() {
    return {
      tabs: [
        { icon: "heart.png", minimized: false, title: "info.exe" },
        { icon: "heart.png", minimized: false, title: "skills.exe" },
        { icon: "heart.png", minimized: false, title: "more.exe" },
      ],
      files: [
        { name: "info.exe", icon: "heart.png" },
        { name: "skills.exe", icon: "heart.png" },
        { name: "more.exe", icon: "heart.png" },
      ],
    };
  },
  methods: {
    onUnMinimize(index) {
      this.tabs[index].minimized = false;
    },
    onMinimize(index) {
      this.tabs[index].minimized = true;
    },
    onClose(index) {
      this.tabs[index].closed = true;
    },
    onOpen(index) {
      this.tabs[index].closed = false;
      this.tabs[index].minimized = false;
    },
  },
};
</script>

<style lang="scss"></style>

<template>
  <div class="pt-5 pb-8">
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
          class="mx-auto w-[70x] max-h-[70px] lg:w-[102px] lg:h-[102px] mb-3 lg:mb-4"
        />
        <p class="font-sans text-lg leading-snug lg:text-4xl">
          {{ skill.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HtmlIcon from "../../../icons/Html.vue";
import CssIcon from "../../../icons/Css.vue";
import ScssIcon from "../../../icons/Scss.vue";
import ReactIcon from "../../../icons/React.vue";
import VueIcon from "../../../icons/Vue.vue";
import JavascriptIcon from "../../../icons/Javascript.vue";
import GitIcon from "../../../icons/Git.vue";
import HydrogenIcon from "../../../icons/Hydrogen.vue";
import NpmIcon from "../../../icons/Npm.vue";
import TailwindIcon from "../../../icons/Tailwind.vue";
export default {
  name: "skills-component",
  computed: {
    ...mapState(["skills"]),
  },
    components: {
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
};
</script>

<style></style>

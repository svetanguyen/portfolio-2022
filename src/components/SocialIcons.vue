<template>
  <ul class="social-icons">
    <li class="shadowed">
      <a class="text-center" href="mailto:phuonhhangnguyen0929@gmail.com">
        <GmailIcon class="mx-auto" />
        <p
          class="text-[17px] leading-snug text-black text-center mt-3 lg:text-white"
          v-if="titled"
        >
          Gmail
        </p>
      </a>
    </li>
    <li class="shadowed">
      <a
        class="text-center"
        target="_blank"
        href="https://github.com/svetanguyen"
      >
        <Github class="mx-auto" />
        <p
          class="text-[17px] leading-snug text-black text-center mt-3 lg:text-white"
          v-if="titled"
        >
          Github
        </p>
      </a>
    </li>
    <li class="shadowed">
      <a
        class="text-center"
        target="_blank"
        href="https://www.linkedin.com/in/sveta-nguyen-493a42218/"
      >
        <Linkedin class="mx-auto" />
        <p
          class="text-[17px] leading-snug text-black text-center mt-3 lg:text-white"
          v-if="titled"
        >
          Linkedin
        </p>
      </a>
    </li>
  </ul>
</template>

<script>
import GmailIcon from "../icons/Gmail.vue";
import Linkedin from "../icons/Linkedin.vue";
import Github from "../icons/Github.vue";
export default {
  name: "social-icons",
  props: ["titled"],
  components: {
    GmailIcon,
    Linkedin,
    Github,
  },
};
</script>

<style lang="scss">
.social-icons {
  display: flex;
  svg {
    width: 32px;
    height: 32px;
    @media screen and (min-width: 1008px) {
      width: 45px;
      height: 45px;
    }
  }
  li {
    &:hover {
      p {
        background: #328adb;
        color: #fff;
      }
      svg {
        rect {
          fill: #761b73;
          & + g {
            path {
              fill: #ae9f5f;
            }
          }
        }
        g > g {
          &:first-child {
            path {
              fill: #ae9f5f;
            }
          }
          & + g {
            path {
              fill: #761b73;
            }
          }
        }
      }
    }
  }
  svg {
    vertical-align: middle;
  }
  a {
    display: block;
  }
  @media screen and (min-width: 1008px) {
    padding: 0;
  }
}
</style>

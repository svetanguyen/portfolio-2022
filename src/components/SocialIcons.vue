<template>
  <ul class="social-icons" :class="{colored: colored}">
      <li class="shadowed">
          <a href="https://www.instagram.com/svetocentrism/"><Insta /></a>
      </li>
      <li class="shadowed">
          <a href="https://github.com/svetanguyen"><Github /></a>
      </li>
      <li class="shadowed">
          <a href="https://www.linkedin.com/in/sveta-nguyen-493a42218/"><Linkedin /></a>
      </li>
  </ul>
</template>

<script>
import Insta from '../icons/Instagram.vue'
import Linkedin from '../icons/Linkedin.vue'
import Github from '../icons/Github.vue'
export default {
    name: 'social-icons',
    props: ['colored'],
    components: {
        Insta,
        Linkedin,
        Github
    }
}
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
        &.colored {
            svg {
                g {
                    &:first-child {
                        path {
                            fill: var(--yellow);
                        }
                    }
                    & + g {
                        path {
                            fill: var(--pink-bright);
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
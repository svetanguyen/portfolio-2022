<template>
  <div class="min-h-page overflow-hidden py-11 lg:py-24 max-w-container mx-auto px-6 lg:px-25" :class="{'h-full-screen': screenHeightBody}">
    <div class="flex items-center justify-center">
      <div class="lg:block rounded-2xl overflow-hidden ease-in-out transition-width duration-500" :class="{'lg:w-2/5 hidden': !tabs[0].minimized, 'lg:w-1/2': tabs[0].minimized}">
        <img :src="require(`../assets/images/profile.jpg`)" alt="profile" />
      </div>
      <div v-if="!tabs[0].minimized" class="lg:-ml-[82px] mx-auto lg:w-3/5">
        <window-component @minimize="onMinimize" :minimized="tabs[0].minimized" :index="0" class="bg-white" title="Hang_Nguyen">
          <img class="lg:hidden pb-6 block max-h-[251px] w-full object-cover" :src="require(`../assets/images/profile.jpg`)" alt="profile" />
          <p class="px-4 lg:px-0 mb-6 lg:mb-10 text-lg leading-[1.4] lg:text-2xl">
            I am a Front-End Web Developer passionate about creating interactive
            applications and experiences on the web.
          </p>
          <div class="px-4 lg:px-0 flex items-center justify-center lg:gap-7">
            <router-link
              class="w-1/2 lg:w-auto text-center rounded-lg bg-button-gray shadow-sm text-lg py-3 px-2 lg:px-[18px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
              :to="{ name: 'About' }"
              >More about me</router-link
            >
            <router-link class="w-1/2 lg:w-auto text-center text-lg py-3 px-2 lg:px-[18px] hover:translate-x-[2px] hover:translate-y-[2px]" :to="{ name: 'Works' }"
              >My works</router-link
            >
          </div>
        </window-component>
      </div>
    </div>
  </div>
  <taskbar-component :tabs="tabs" @unMinimize="onUnMinimize" />
</template>

<script>
import TaskbarComponent from "../components/Taskbar.vue";
import WindowComponent from "../components/Window/Window.vue";
import {mapState} from 'vuex'
export default {
  name: "home-page",
  components: {
    WindowComponent,
    TaskbarComponent,
  },
  computed: {
    ...mapState(['screenHeightBody'])
  },
  watch:{
    $route (){
      this.$store.commit('updateScreenHeightBody', false)
    }
  },
  data() {
    return {
      tabs: [
        { icon: 'heart.png', minimized: false, title: 'Hang_Nguyen' },
        { icon: 'heart.png', minimized: false, title: 'a' },
      ]
    }
  },
  methods: {
    onUnMinimize(index) {
      this.tabs[index].minimized = false
    },
    onMinimize(index) {
      this.tabs[index].minimized = true
    }
  }
};
</script>

<style lang="scss">
</style>

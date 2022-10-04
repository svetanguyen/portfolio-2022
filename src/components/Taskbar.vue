<template>
  <div :style="{'position': position}" class="left-0 w-full bg-pink-light p-4 bottom-0 shadow-sm flex justify-between">
    <div class="flex h-full">
      <button class="shadow-sm rounded-lg bg-pink-light flex items-center py-2.5 px-6 hover:!shadow-lg gap-2">
        <computer-icon /> Start
      </button>
      <div class="mx-2" :key="index" v-for="(tab, index) in tabs">
        <button 
        class="flex shadow-sm rounded-lg hover:shadow-lg gap-2 items-center text-[25px] leading-none h-full px-3 w-[213px] text-left"
          @click="unMinimize(index)"
            v-if="tab.minimized">
          <img
            class=""
            :src="require(`../assets/images/${tab.icon}`)"
            :alt="alt"
            />
            {{tab.title}}
        </button>
        
      </div>
    </div>
    <div class="flex gap-8">
      <social-icons class="lg:gap-6"/>
      <div class="text-[18px] leading-none flex flex-col gap-2">
        <p class="font-sans">@ Hang_Nguyen 2022</p>
        <p class="font-sans">Design: Tin Bui</p>
      </div>
    </div>
  </div>
</template>

<script>
import ComputerIcon from '../icons/Computer.vue'
import SocialIcons from './SocialIcons.vue'
export default {
  name: "taskbar-component",
  props: ["tabs"],
  components: {
    ComputerIcon,
    SocialIcons
  },
  data() {
        return {
            mobile: null,
            windowWidth: null,
            bottom: 0,
            position: 'fixed'
        };        
    },
  created () {
    this.checkScreen()
    window.addEventListener('resize', this.checkScreen);
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      console.log('ass', window.innerHeight)
      if (this.mobile && (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 375) {
        this.position = 'sticky'
      } else if (!this.mobile && (window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 85) {
        this.position = 'sticky'
      } else {
        this.position = 'fixed'
      }
    },
    checkScreen() {
            this.windowWidth = window.innerWidth;
            
            if (this.windowWidth < 1024) {
                this.mobile = true;
                return
            } else {
                this.mobile = false;
                return
            }
        },
        unMinimize(index) {
          this.$emit('unMinimize', index);
        }
  }
};
</script>

<style lang="scss">
</style>

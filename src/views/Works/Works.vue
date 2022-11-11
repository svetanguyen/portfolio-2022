<template>
  <div class="min-h-page overflow-hidden py-11 relative lg:py-24 max-w-container mx-auto px-6 lg:px-25">
      <img
            class="absolute max-w-[89px] lg:max-w-none -left-2 lg:left-0 top-2 lg:top-[78px]"
            :src="require(`../../assets/images/butterflies.png`)"
            alt="butterflies"
          />
      <h2 class="text-white font-mono text-[23px] lg:text-[62px] leading-none text-center capitalize mb-6 lg:mb-16">My works</h2>
      <div class="relative w-full lg:flex justify-center flex-wrap">
        <card-component class="w-full lg:w-1/2 mb-6" v-for="(card, index) in projectCards" :key="index" :title="card.title" :description="card.description" :image="card.image" :alt="card.title" :link="card.link" />
      </div>
      <img
      class="absolute max-w-[366px] lg:max-w-none -bottom-[130px] lg:-bottom-8 -right-10 lg:-right-8"
      :src="require(`../../assets/images/clouds.png`)"
      alt="background"
    />
      <window-component class="relative bg-white max-w-[715px] mx-auto mt-5 lg:mt-[164px] lg:mb-[75px]" title="Hang_Nguyen">
        <p class="text-center mt-2 lg:mt-0 mb-8 text-base leading-snug">
          Interested in collaboration? Get in touch.
        </p>
        <div
          class="flex justify-center gap-x-2 lg:gap-x-[52px] lg:px-[109px] max-w-[300px] lg:max-w-none mx-auto"
        >
          <router-link
            class="text-center rounded-lg bg-button-gray shadow-sm text-lg py-3 px-[30px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
            :to="{ name: 'Contacts' }"
            >Contact me</router-link
          >
        </div>
      </window-component>
      
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardComponent from './Card.vue'
import WindowComponent from '../../components/Window.vue'

export default {
    name: 'works-page',
    components: {
      CardComponent,
      WindowComponent
    },
    computed: {
      ...mapState(["projectCards"]),
    },
}
</script>

<style lang="scss">
   
</style>
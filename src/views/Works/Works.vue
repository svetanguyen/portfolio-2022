<template>
  <div
    class="min-h-page overflow-hidden relative max-w-container mx-auto"
  >
    <div class="px-6 lg:px-25 lg:py-24 py-11">
    <files-component @open="onOpen" :files="files" />
      <img
      class="absolute max-w-[89px] lg:max-w-none -left-2 lg:left-0 top-2 lg:top-[78px]"
      :src="require(`../../assets/images/butterflies.png`)"
      alt="butterflies"
    />
    <h2
      class="text-white font-mono text-[23px] lg:text-[62px] leading-none text-center capitalize mb-6 lg:mb-16"
    >
      My works
    </h2>
    <div class="relative w-full lg:flex lg:gap-5 justify-center">
      <card-component
        class="w-full lg:w-1/2 mb-6"
        v-for="(card, index) in projectCards"
        :key="index"
        :title="card.title"
        :description="card.description"
        :image="card.image"
        :alt="card.title"
        :link="card.link"
      />
    </div>
    <img
      class="absolute max-w-[366px] lg:max-w-none -bottom-[130px] lg:-bottom-8 -right-10 lg:-right-8"
      :src="require(`../../assets/images/clouds.png`)"
      alt="background"
    />
    <window-component
      @minimize="onMinimize"
      @close="onClose"
      :minimized="tabs[0].minimized"
      :index="0"
      query="contact"
      class="relative bg-white max-w-[715px] mx-auto mt-5 lg:mt-[164px] lg:mb-[75px]"
      title="Hang_Nguyen"
      :icon="tabs[0].icon"
      :closed="tabs[0].closed"
    >
      <div 
      :class="{'lg:pt-10': screenHeightBody}"
      >
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
      </div>
    </window-component>
    </div>
    
    <taskbar-component />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardComponent from "./Card.vue";
import WindowComponent from "../../components/Window/Window.vue";
import TaskbarComponent from "../../components/Taskbar.vue";
import FilesComponent from "../../components/Files.vue";

export default {
  name: "works-page",
  components: {
    CardComponent,
    WindowComponent,
    TaskbarComponent,
    FilesComponent
  },
  computed: {
    ...mapState(["projectCards", "screenHeightBody"]),
  },
  data() {
    return {
      tabs: [{ icon: "heart.png", minimized: false, title: "info.exe" }],
      files: [{ name: "info.exe", icon: "heart.png" }],

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

<template>
  <div class="h-window-content-mob">
    <div class="bg-pink-light">
      <div class="flex flex-wrap lg:flex-nowrap w-full px-2 pt-2">
        <button
          class="bg-button-gray mr-1 shadow-sm flex items-center py-1 text-black rounded-lg px-2"
          :class="{
            'opacity-50 pointer-events-none': currentLinkIndex === 0,
            'hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]':
              currentLinkIndex > 0,
          }"
          aria-label="previous window"
          @click.prevent="onBack"
        >
          <arrow-icon />
          Back
        </button>
        <button
          class="bg-button-gray mr-3 shadow-sm flex items-center py-1 text-black rounded-lg px-2"
          :class="{
            'opacity-50 pointer-events-none': linksList.length === currentLinkIndex + 1,
            'hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]':
              linksList.length > currentLinkIndex + 1,
          }"
          aria-label="next window"
          @click.prevent="onNext"
        >
          <arrow-icon class="rotate-180" />
        </button>
        <div class="bg-pink-light mt-2 lg:mt-0 flex-grow mb-1 w-full lg:w-auto">
          <p
            class="rounded-lg shadow-xl-hovered py-1 px-3 text-xl leading-snug opacity-80"
          >
            Sveta's portfolio
            <span v-if="folder"> / {{ folder }} / {{ title }}</span>
            <span v-if="!folder && !title.includes('portfolio')">
              / {{ title }}</span
            >
          </p>
        </div>
      </div>
    </div>
     <div
      class="flex flex-grow font-normal py-6 px-2 text-lg leading-snug rounded-b-2xl text-[25px] bg-pink-light lg:px-3 lg:py-2 h-window-content-mob lg:h-window-content"
    >
      <sidebar-component
        class="overflow-hidden lg:block hidden"
        :class="{
          'w-1/3': maximized,
          'max-w-1/4 w-[270px]': !maximized,
        }"
      />
      <div
        class="overflow-hidden h-full w-full"
        :class="{
          'lg:w-2/3 lg:ml-5': maximized,
          'lg:w-auto lg:ml-5': !maximized,
        }"
      >
        <div class="py-2 bg-white h-full shadow-lg">
          <div
            :class="{
              'px-5 my-[4px] flex-grow': maximized,
            }"
            class="h-full overflow-y-scroll mr-1"
          >
            <div class="h-full">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ArrowIcon from "../../icons/Arrow.vue";
import SidebarComponent from "./Sidebar.vue"
export default {
  name: "folder-component",
  computed: {
    ...mapState(["updatedLinks", "folders", "files", "currentLinkIndex", "linksList"]),
  },
  components: {
    ArrowIcon,
    SidebarComponent
  },
  props: ["folder", "title", "maximized"],
  methods: {
    ...mapMutations([
      "updateUpdatedLinks",
      "goBack",
      "goNext"
    ]),
    onBack() {
      this.goBack()
      this.updateUpdatedLinks();
      this.$router.push({
        path: this.$route.path,
        query: { max: this.$route?.query.max ? "folder" || "" : "", folder: this.linksList[this.currentLinkIndex], file: this.$route?.query.file, active: "folder" },
      });
    },
    onNext() {
      this.goNext();
      this.updateUpdatedLinks();
      this.$router.push({
        path: this.$route.path,
        query: { max: this.$route?.query.max ? "folder" || "" : "", folder: this.linksList[this.currentLinkIndex], file:  this.$route?.query.file, active: "folder" },
      });
    },
  },
};
</script>

<style></style>

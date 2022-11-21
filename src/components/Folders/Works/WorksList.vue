<template>
  <div
    class="relative w-full"
    :class="{ 'lg:flex flex-wrap justify-center': maximized }"
  >
    <card-component
      class="w-full mb-6"
      :class="{ 'lg:w-1/2': maximized }"
      v-for="(card, index) in projectCards"
      :maximized="maximized"
      :key="index"
      :title="card.title"
      :description="card.description"
      :image="card.image"
      :alt="card.title"
      :link="card.link"
      :github="card.github"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardComponent from "./Card.vue";
export default {
  name: "works-list",
  components: { CardComponent },
  props: ["query", "windowWidth"],
  data() {
    return {
      maximized: !this.windowWidth,
    };
  },
  created() {
    if (this.$route.query.max === this.query) {
      this.maximized = true;
    } else {
      this.maximized = false;
    }
  },
  watch: {
    $route(to) {
      if (to.query.max === this.query) {
        this.maximized = true;
      } else {
        this.maximized = false;
      }
      if (!to.query.max) {
        this.maximized = false;
      }
    },
  },
  computed: {
    ...mapState(["projectCards"]),
  },
};
</script>

<style></style>

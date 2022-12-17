<template>
  <div
    class="relative w-full"
    :class="{ 'lg:flex flex-wrap justify-center': maximized }"
  >
    <h2 class="w-full mb-3 text-center text-3xl lg:text-6xl">Personal projects</h2>
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
  data() {
    return {
      maximized: true,
    };
  },
  computed: {
    ...mapState(["projectCards"]),
  },
};
</script>

<style></style>

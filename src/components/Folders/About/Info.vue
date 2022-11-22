<template>
  <div class="lg:px-12 lg:pt-10">
    <div class="relative mt-5 px-2 lg:px-0">
      <quotes-icon
        class="absolute bottom-full -translate-y-[20px] lg:translate-0 left-0 lg:left-auto lg:bottom-full lg:right-full"
      />
      <p class="mb-5">
        My name is Sveta and I'm a front-end developer based in Toronto. I was
        born and raised in Ukraine, graduated with a Bachelor degree in German
        languages in Kharkiv, Ukraine. Later I found interest in Front end and
        that is how my journey in this field began. I moved to Vietnam and
        worked there as a Frontend developer for two years before moving to
        Toronto. Now I'm ready to continue my journey here!
      </p>
      <p class="mb-5">
        I have experience in developing and maintaining web sites on Shopify, as
        well as developing SPAs on ReactJS and Vue.js. You can read more on my
        skills
        <router-link
          class="underline"
          :to="{
            name: 'Home',
            query: { max: $route.query.max ? 'skills' : '', open: 'skills' },
          }"
          >here.</router-link
        >
      </p>
      <p>
        Fun fact: I liked learning languages so much i started learning
        programming ones:D
      </p>
      <quotes-icon
        class="absolute right-0 top-full translate-y-[20px]"
        :reversed="true"
      />
    </div>
  </div>
</template>

<script>
import QuotesIcon from "../../../icons/Quotes.vue";
export default {
  name: "info-component",
  components: {
    QuotesIcon,
  },
};
</script>

<style></style>

<template>
  <div class="lg:px-12 lg:pt-10">
            <div
              class="relative mt-5 px-2 lg:px-0"
            >
              <quotes-icon
                class="absolute bottom-full -translate-y-[20px] lg:translate-0 left-0 lg:left-auto lg:bottom-full lg:right-full"
              />
              <p class="mb-5">
                I’m a front end developer with experience in developing themes
                on Shopify and a little bit of experience with working on apps
                (VueJS).
              </p>
              <p>
                I am always willing to learn new challenging things and strive
                to grow as developer.
              </p>
              <quotes-icon
                class="absolute right-0 top-full translate-y-[20px]"
                :reversed="true"
              />
            </div>
          </div>
</template>

<script>
import QuotesIcon from "../../../icons/Quotes.vue"
export default {
    name: "info-component",
    components: {
        QuotesIcon
    }
}
</script>

<style>

</style>
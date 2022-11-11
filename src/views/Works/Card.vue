<template>
  <div class="lg:px-2.5">
    <div
      class="rounded-2xl relative shadow-sm pt-[70%] lg:pt-[60%] h-0 overflow-hidden"
    >
      <a
        class="rounded-2xl overflow-hidden absolute top-0 left-0 h-full w-full block"
        :href="link"
        target="_blank"
      >
        <img
          v-if="image"
          class="absolute top-0 left-0 w-full h-full object-cover max-w-full"
          :src="require(`../../assets/images/${image}`)"
          :alt="alt"
        />
        <div
          class="relative text-center opacity-60 lg:opacity-0 hover:opacity-60 flex flex-col items-center justify-center bg-black text-white w-full h-full"
        >
          <h3 v-if="title" class="text-[30px] lg:text-[50px] mb-2 leading-snug">
            {{ title }}
          </h3>
          <p v-if="description" class="text-lg lg:text-xl leading-[160%]">
            {{ description }}
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-component",
  props: ["image", "alt", "title", "description", "link"],
};
</script>

<style lang="scss"></style>

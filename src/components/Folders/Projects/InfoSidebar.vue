<template>
  <div
    class="hidden md:flex flex-col h-full p-5 md:min-w-[250px] flex-grow md:max-w-[343px] md:shadow-lg bg-white md:overflow-auto "
  >
    <div class="flex gap-3.5 mb-5">
      <img
        v-if="project.image"
        class="w-[67px] object-cover aspect-square"
        :src="require(`../../../assets/images/${project.image}`)"
        :alt="project.title"
      />
      <div>
        <h4 class="font-serif font-normal text-2xl leading-[33.6px]">
          {{ project.title }}
        </h4>
        <p class="font-serif font-normal text-xl text-gray-300">website</p>
      </div>
    </div>
    <div v-if="project.info" class="flex-grow">
      <h5 class="text-2xl leading-[33.6px]">Information</h5>
      <div
        v-for="(key, index) in Object.keys(project.info)"
        :key="index"
        class="flex gap-8 justify-between mb-1 border-b border-gray-500"
      >
        <span class="text-xl text-gray-400 capitalize">{{ key }}</span>
        <span class="text-xl text-right">{{ project.info[key] }}</span>
      </div>
    </div>
    <div>
      <a
        class="mb-2 bg-button-gray shadow-sm text-xl flex-grow w-full py-3 rounded-lg block text-center text-black hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
        :href="project.link"
        target="_blank"
        >Live</a
      >
      <a
        class="bg-button-gray shadow-sm text-xl flex-grow w-full py-3 rounded-lg block text-center text-black hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
        :href="project.github"
        target="_blank"
        >Github</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoSidebar',
  props: ['project'],
};
</script>

<style></style>

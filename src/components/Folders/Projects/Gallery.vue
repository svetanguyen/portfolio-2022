<template>
  <div class="md:min-w-[250px] flex h-full flex-col justify-between flex-grow md:bg-white md:shadow-lg pt-1 pl-1 pr-0.5 pb-0.5">
    <div class="py-5 px-7 relative hidden h-[80%] md:block">
      <img
        v-if="chosenProject.image"
        class="object-cover w-full max-h-full h-full"
        :src="require(`../../../assets/images/${chosenProject.image}`)"
        :alt="chosenProject.title"
      />
    </div>
    <div v-if="chosenProject" class="py-2 border-gray-200 border px-3 relative h-[65%] md:h-[80%] overflow-hidden md:hidden">
      <a target="_blank" rel="noopener noreferrer" :href="chosenProject.link" class="block h-full w-full">
        <div class="flex items-center gap-3 mb-3">
          <img
            v-if="chosenProject.image"
            class="object-cover w-[150px] max-h-full h-full"
            :src="require(`../../../assets/images/${chosenProject.image}`)"
            :alt="chosenProject.title"
          />
          <div>
            <h4 class="font-serif font-normal text-2xl leading-[33.6px]">
              {{ chosenProject.title }}
            </h4>
            <p class="font-serif font-normal text-xl text-gray-300">website</p>
          </div>
        </div>
        <div class="text-xl">{{ chosenProject.info.stack }}</div>
      </a>
    </div>
    <ul class="flex flex-shrink h-[80px] md:h-1/5 pb-1 items-end w-full justify-center">
      <li :class="{
          'bg-blue': project.title === chosenProject.title
        }" class="flex-grow md:p-4 p-2 cursor-pointer h-full" v-for="(project, index) in projects" :key="index" @click="$emit('update-project', index)">
        <img
          v-if="project.image"
          class="object-cover w-full aspect-square h-full"
          :src="require(`../../../assets/images/${project.image}`)"
          :alt="project.title"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "GalleryComponent",
  props: ["projects", "chosenProject"]
}
</script>

<style>

</style>
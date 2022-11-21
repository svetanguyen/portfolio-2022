<template>
    <div class="px-3">
<div class="rounded-2xl relative shadow-sm pt-[70%] lg:pt-[80%] h-0 overflow-hidden">
        <div class="rounded-2xl overflow-hidden absolute top-0 left-0 h-full w-full block">
            <img
            v-if="image"
            class="absolute top-0 left-0 w-full h-full object-cover max-w-full"
            :src="require(`../../../assets/images/${image}`)"
            :alt="alt"
          />
          <div class="relative text-center lg:hover:opacity-100 opacity-0 flex flex-col items-center justify-center before:block before:left-0 before:top-0 before:absolute before:w-full before:h-full before:opacity-0 hover:before:opacity-60 before:bg-black text-white w-full h-full">
              <h3 v-if="title" class="relative text-[30px] lg:text-[50px] mb-2 leading-snug">{{ title }}</h3>
              <p v-if="description" class="relative text-lg lg:text-xl leading-[160%] mb-4">{{ description }}</p>
              <div class="flex relative">
                  <a class="bg-button-gray shadow-sm text-xl flex-grow min-w-[164px] py-3 rounded-lg block mx-2 text-center text-black" :href="link" target="_blank">Live</a>
                    <a class="bg-button-gray shadow-sm text-xl flex-grow min-w-[164px] py-3 rounded-lg block mx-2 text-center text-black" :href="github" target="_blank">Github</a>
              </div>
          </div>
        </div>
        
    </div>
    </div>
</template>

<script>
export default {
    name: 'card-component',
    props: ['image', 'alt', 'title', 'description', 'link', 'github']
}
</script>

<style lang="scss">
</style>
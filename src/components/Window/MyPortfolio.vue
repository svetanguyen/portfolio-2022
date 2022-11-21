<template>
  <div class="relative md:min-w-[600px] w-full md:w-auto">
      <files-component class="flex gap-4 px-4" text="black" :files="files" />
  </div>
</template>

<script>
import FilesComponent from "../Files.vue"
export default {
    name: "portfolio-component",
    components: {FilesComponent},
    data() {
        return {
            files: [
                {  name: "About me", query: 'about', icon: 'document.png' },
                {  name: "Works", query: 'works', icon: 'folder.png' },
                {  name: "Contact", query: 'contact', icon: 'files.png' },
            ],
        }
    }
}
</script>

<style>

</style>
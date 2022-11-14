<template>
  <div class="relative md:min-w-[600px] w-full md:w-auto">
      <files-component class="flex gap-4 p-3" text="black" :files="files" />
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
                {  name: "Home", query: 'home', icon: 'computer.png' },
                {  name: "About me", query: 'about', icon: 'computer.png' },
                {  name: "Works", query: 'works', icon: 'folder.png' },
                {  name: "Contact", query: 'contact', icon: 'files.png' },
            ],
        }
    }
}
</script>

<style>

</style>
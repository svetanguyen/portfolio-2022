<template>
  <div class="lg:px-4 pt-3">
    <files-component class="flex gap-4" :files="files" text="black" />
  </div>
</template>

<script>
import FilesComponent from '../../Files.vue'
export default {
    name: 'AboutComponent',
    components: {
        FilesComponent
    },
    data() {
        return {
            files: [
                {  name: "Info", query: 'info', icon: 'files.png' },
                {  name: "Skills", query: 'skills', icon: 'files.png' },
                {  name: "Links", query: 'links', icon: 'files.png' },
            ],
        }
    }
}
</script>

<style>

</style>
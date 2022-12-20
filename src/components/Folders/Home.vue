<template>
  <div>
      <files-component :files="files" text="black" />
  </div>
</template>

<script>
import FilesComponent from '../Files.vue'
export default {
    name: 'HomeComponent',
    components: {
        FilesComponent
    },
    data() {
        return {
            files: [
                {  title: "Hello", query: 'hello', icon: 'notepad.png' },
            ],
        }
    }
}
</script>

<style>

</style>
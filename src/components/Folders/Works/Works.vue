<template>
  <div>
      <files-component class="flex gap-4" :files="files" text="black" />
  </div>
</template>

<script>
import FilesComponent from '../../Files.vue'
export default {
    name: 'WorkComponent',
    components: {
        FilesComponent
    },
    data() {
        return {
            files: [
                {  name: "Works", query: 'worksList', icon: 'notepad.png' },
            ],
        }
    }
}
</script>

<style>

</style>
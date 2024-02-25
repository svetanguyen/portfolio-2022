<template>
  <div class="h-full md:flex pl-1 gap-2 relative">
    <gallery-component @update-project="updateProject" :projects="projects" :chosenProject="chosenProject" />
    <info-sidebar :project="chosenProject || projects[0]" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import InfoSidebar from './InfoSidebar.vue'
import GalleryComponent from './Gallery.vue'

export default {
  name: "ProjectsComponent",
  components: {
    InfoSidebar,
    GalleryComponent,
  },
  computed: {
    ...mapState(["projects"]),
  },
  data() {
    return {
      chosenProject: (this.projects && this.projects[0]) || {},
      chosenProjectIndex: 0,
    }
  },
  created() {
    this.chosenProject = this.projects[this.chosenProjectIndex]
  },
  methods: {
    updateProject(index) {
      this.chosenProject = this.projects[index]
      this.chosenProjectIndex = index
    }
  }
}
</script>

<style>

</style>
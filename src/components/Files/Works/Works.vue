<template>
  <div class="p-4 bg-white h-full lg:shadow-lg">
    <files-component class="flex" :files="files" text="black" />
  </div>
</template>

<script>
import FilesComponent from "../../Files.vue";
export default {
  name: "WorkComponent",
  components: {
    FilesComponent,
  },
  data() {
    return {
      files: [
        { title: "Projects", query: "projects", icon: "notepad.png" },
        {
          title: "Github",
          icon: "github.png",
          externalLink: "https://github.com/svetanguyen",
        },
      ],
    };
  },
};
</script>

<style></style>

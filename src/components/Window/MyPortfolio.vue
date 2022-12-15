<template>
  <div class="relative md:min-w-[600px] w-full md:w-auto">
    <files-component
      class="flex lg:pt-6 px-4 lg:px-6"
      text="black"
      :files="files"
    />
  </div>
</template>

<script>
import FilesComponent from "../Files.vue";
export default {
  name: "portfolio-component",
  components: { FilesComponent },
  data() {
    return {
      files: [
        { name: "About me", query: "about", icon: "heart.png" },
        { name: "Works", query: "works", icon: "folder.png" },
        { name: "Contact", query: "contact", icon: "files.png" },
        { name: "Calculator", query: "calculator", icon: "calculator.png", hideSidebar: true, isFile: true },
      ],
    };
  },
};
</script>

<style></style>

<template>
  <div class="lg:px-4 pt-3">
    <files-component class="flex" :files="files" text="black" />
  </div>
</template>

<script>
import FilesComponent from "../../Files.vue";
export default {
  name: "AboutComponent",
  components: {
    FilesComponent,
  },
  data() {
    return {
      files: [
        { name: "Info", query: "info", icon: "notepad.png" },
        { name: "Skills", query: "skills", icon: "notepad.png" },
        {
          name: "Resume",
          icon: "document.png",
          query: "hello",
          externalLink:
            "https://drive.google.com/file/d/1NkAXJfQ39CbtDIjX_oEJrZXyJl8EyAil/view?usp=sharing",
        },
      ],
    };
  },
};
</script>

<style></style>

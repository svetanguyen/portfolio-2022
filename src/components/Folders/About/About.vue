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
        { name: "Info", query: "info", icon: "document.png" },
        { name: "Skills", query: "skills", icon: "document.png" },
        {
          name: "Resume",
          icon: "document.png",
          query: "hello",
          externalLink:
            "https://drive.google.com/file/d/1FTlAMC4kJaolMn6h2vkj6Kh0y1_lXHJk/view?usp=sharing",
        },
      ],
    };
  },
};
</script>

<style></style>

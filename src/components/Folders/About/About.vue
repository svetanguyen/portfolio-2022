<template>
  <div class="lg:px-4 pt-3" :class="{'lg:w-[600px]': !maximized}">
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
  props: ["maximized"],
  data() {
    return {
      files: [
        { title: "Info", query: "info", icon: "notepad.png" },
        { title: "Skills", query: "skills", icon: "notepad.png", isFile: true },
        {
          title: "Resume",
          icon: "document.png",
          query: "hello",
          externalLink:
            "https://drive.google.com/file/d/1ESfcj7M-kAtCWYJWQaJKbncB-KKvbukP/view?usp=sharing",
        },
      ],
    };
  },
};
</script>

<style></style>

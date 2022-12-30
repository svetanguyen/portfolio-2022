<template>
  <div class="bg-yellow-100 h-full text-center">
    <form @submit="onSave" class="px-6 py-10">
      <div v-if="showTitle" class="flex justify-center mb-5 gap-4 flex-wrap">
        <label for="Title">Save as</label>
        <input class="shadow-xxl" id="Title" type="text" v-model="title" />
        <p v-if="showError" class="text-red">The file with this name already exists</p>
      </div>
      <div v-if="!showTitle">Are you sure you want to save this file?</div>
      <button
        class="h-[50px] block w-40 mx-auto rounded-lg bg-button-gray shadow-sm hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
        @click="onSave"
        type="submit"
        aria-label="save file name"
      >
        Save
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "save-dialog",
  data() {
    return {
      title: "",
      showTitle: true,
      showError: false
    };
  },
  computed: {
    ...mapState(["currentFileContent", "currentExistingFileContent", "files"]),
  },
  created() {
    if (this.currentExistingFileContent) {
      this.showTitle = false
    }
  },
  methods: {
    ...mapMutations(["addFile", "updateCurrentFileContent", "updateCurrentExistingFileContent", "updateFile"]),
    onSave() {
      if (this.files.find(file => file.title === this.title)) {
        this.showError = true 
        return
      } else this.showError = false
      if (this.currentFileContent) {
        const file = { ...this.currentFileContent };
        file.title = this.title;
        file.query = this.title;
        file.alt = this.title;
        this.addFile({
          ...file,
        });
        this.closeFile();
      }
      if (this.currentExistingFileContent) {
        this.updateFile({
          query: this.currentExistingFileContent.title,
          content: this.currentExistingFileContent.content
        });
        this.closeFile();
      }
      
    },
    closeFile() {
      this.$router.push({
        path: "/",
        query: {
          max: this.$route.query.max === "file" ? "" : this.$route.query.max,
          folder: this.$route.query.folder,
          file: "",
          active:
            this.$route.query.active === "file"
              ? "folder"
              : this.$route.query.active,
        },
      });
      this.updateCurrentFileContent(null)
      this.updateCurrentExistingFileContent(null)
    },
  },
};
</script>

<style></style>

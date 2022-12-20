<template>
  <div class="h-full relative">
    <div>
      <button @click="openSaveDialog" class="p-2" type="button">Save</button>
    </div>
    <div v-if="isDialogOpen" class="absolute top-5 left-1/2 -translate-x-1/2">
            <p>Do you want to save this?</p>
            <div class="flex">
                <button @click="openSaveDialog">Yes</button>
                <button @click="closeFile">No</button>
            </div>
        </div>
        <div v-if="isSaveDialogOpen" class="absolute top-5 left-1/2 -translate-x-1/2">
            <label for="Title">Save as</label>
            <input id="Title" type="text" v-model="title">
            <button @click="onSave">Save</button>
        </div>
    <div class="ml-1 h-full p-1">
      <textarea
        v-model="content"
        name="content"
        class="w-full h-full focus:outline-none"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "notepad-component",
  data() {
    return {
      content: "",
      title: "",
      isDialogOpen: false,
      isSaveDialogOpen: false
    };
  },
  methods: {
    ...mapMutations(["addFile"]),
    openDialog() {
        this.isDialogOpen = true
    },
    closeDialog() {
        this.isDialogOpen = false
    },
    openSaveDialog() {
        this.isSaveDialogOpen = true
    },
    closeSaveDialog() {
        this.isSaveDialogOpen = false
    },
    onSave() {
        const file = {
             query: this.title,
        icon: "calculator.png",
        alt: this.title,
        title: this.title,
        component: "TextComponent",
        disableMaximize: false,
        small: false,
        isFile: true,
        content: this.content
        }
      this.addFile({
       ...file
      });
      console.log('file', file)
      this.closeFile()
    },
    closeFile() {
        this.$router.push({
             path: "/",
            query: {
                max: this.$route.query.max === 'file' ? '' : this.$route.query.max,
                folder: this.$route.query.folder,
                file: '',
                active: this.$route.query.active === 'file' ? 'folder' : this.$route.query.active
            },
        })
    }
  },
};
</script>

<style></style>

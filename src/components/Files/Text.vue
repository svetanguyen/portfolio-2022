<template>
  <div class="h-full relative bg-gray-200">
    <div class="mx-1">
      <dropdown-component title="File">
        <button
          @click="openSaveDialog"
          aria-label="open file dropdown"
          type="button"
          class="shadow-sm text-base text-black/80 leading-snug p-2 bg-gray-200 min-w-[116px] text-left"
        >
          Save as
        </button>
      </dropdown-component>
    </div>
    <div
      class="ml-1 p-1 bg-gray-100 rounded-lg shadow-xxl h-noinset-file-content"
    >
      <div class="h-full overflow-y-scroll">
        <textarea
          v-model="newContent"
          name="content"
          class="w-full h-full focus:outline-none"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import DropdownComponent from '../Dropdown.vue'
export default {
    name: 'text-component',
    data() {
      return {
        newContent: '',
      }
    },
    components: {
      DropdownComponent
    },
    computed: {
    },
    props: ["content", "title"],
    created() {
      this.newContent = this.content
    },
    methods: {
      ...mapMutations(["updateCurrentExistingFileContent"]),
      openSaveDialog() {
        const file = {
          query: this.title,
          alt: this.title,
          title: this.title,
          content: this.newContent,
        };
        this.updateCurrentExistingFileContent({
          ...file,
        });
        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            dialog: "save-dialog",
          },
        });
    },
    }

}
</script>

<style>

</style>
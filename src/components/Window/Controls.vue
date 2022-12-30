<template>
  <div class="flex">
    <button
      @click="minimize(index)"
      class="cursor-pointer hover:opacity-80"
      aria-label="minimize"
      v-if="this.type !== 'dialog'"
    >
      <minimize-icon />
    </button>
    <button
      @click="updateMaximize"
      class="cursor-pointer hover:opacity-80"
      v-if="this.type !== 'dialog'"
      :class="{
        'pointer-events-none opacity-40':
          windowWidth <= 1024 || disableMaximize,
      }"
      aria-label="maximize"
    >
      <maximize-icon />
    </button>
    <button
      @click="handleClose"
      v-if="this.type !== 'dialog'"
      class="cursor-pointer hover:opacity-80"
      aria-label="close"
    >
      <close-window />
    </button>
  </div>
</template>

<script>
import MinimizeIcon from "../../icons/Minimize.vue";
import MaximizeIcon from "../../icons/Maximize.vue";
import CloseWindow from "../../icons/CloseWindow.vue";
import { mapMutations } from "vuex";
export default {
  name: "controls-component",
  props: [
    "disableMaximize",
    "windowWidth",
    "index",
    "isFile",
    "maximized",
    "query",
    "openedWindows",
    "isDialog",
    "type",
  ],
  components: {
    MinimizeIcon,
    MaximizeIcon,
    CloseWindow,
  },
  methods: {
    ...mapMutations([
      "resetLinks",
      "updateUpdatedLinks",
      "onMinimize",
      "onRestore",
    ]),
    handleClose() {
      if (!this.isFile) {
        this.resetLinks();
        this.updateUpdatedLinks();
      }
      this.updateQuery(
        "",
        this.type === "folder" ? "" : this.$route.query.folder,
        this.type === "file" ? "" : this.$route.query.file,
        this.type === "dialog" ? "" : this.$route.query.dialog,
        this.isFile ? this.$route.query.folder : this.$route.query.file
      );
      this.onRestore({ index: this.index });
    },
    updateMaximize() {
      if (this.windowWidth <= 1024) return;
      if (!this.maximized) {
        this.updateQuery(
          this.type,
          this.openedWindows,
          this.$route.query.file,
          this.$route.query.dialog,
          this.query
        );
      } else {
        this.updateQuery(
          "",
          this.openedWindows,
          this.$route.query.file,
          this.$route.query.dialog,
          this.query
        );
      }
    },
    updateQuery(max, folder, file, dialog, active) {
      this.$router.push({
        path: this.$route.path,
        query: {
          max: max,
          folder: folder,
          file: file,
          dialog: dialog,
          active: active,
        },
      });
    },
    minimize() {
      this.onMinimize({ index: this.index });
    },
  },
};
</script>

<style></style>

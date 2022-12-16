<template>
  <div class="flex">
        <button
          @click="minimize(index)"
          class="cursor-pointer hover:opacity-80"
          aria-label="minimize"
        >
          <minimize-icon />
        </button>
        <button
          @click="updateMaximize"
          class="cursor-pointer hover:opacity-80"
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
          class="cursor-pointer hover:opacity-80"
          aria-label="close"
        >
          <close-window />
        </button>
      </div>
</template>

<script>
import MinimizeIcon from '../../icons/Minimize.vue'
import MaximizeIcon from '../../icons/Maximize.vue'
import CloseWindow from '../../icons/CloseWindow.vue'
export default {
    name: "controls-component",
    props: ["title", "disableMaximize", "windowWidth", "index"],
    components: {
      MinimizeIcon,
      MaximizeIcon,
      CloseWindow
    },
    methods: {
      handleClose() {
      if (!this.isFile) {
        this.resetLinks();
        this.updateUpdatedLinks();
      }
      this.updateQuery("", !this.isFile ? "" : this.$route.query.open, this.isFile ? "" : this.$route.query.file, this.isFile ? this.$route.query.open : this.$route.query.file)
      this.onRestore();
    },
    updateMaximize() {
      if (this.windowWidth <= 1024) return;
      this.maximized = !this.maximized;
      if (this.maximized) {
        this.updateQuery(this.query, this.openedWindows, this.$route.query.file, this.query)
      } else {
        this.updateQuery("", this.openedWindows, this.$route.query.file, this.query)
      }
    },
    updateQuery(max, open, file, active) {
      this.$router.push({
        path: this.$route.path,
        query: { max: max, open: open, file: file, active: active },
      });
    },
    onRestore() {
      this.$emit('restore')
    },
        minimize(index) {
      this.onRestore();
      this.onMinimize({ index: index });
    },

    }
}
</script>

<style>

</style>
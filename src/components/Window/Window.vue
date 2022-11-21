<template>
  <div
    v-if="!minimized && !closed"
    ref="window"
    class="shadow-sm rounded-2xl overflow-hidden transition-all lg:min-w-[600px]"
    :class="{
      '!h-full-screen-mob lg:!h-full-screen !m-0 !max-w-none !fixed top-0 lg:top-0 left-0 !w-full z-10':
        maximized || windowWidth <= 1024,
      'h-[70vh] absolute top-10 mx-auto lg:resize pb-1':
        !maximized && windowWidth > 1024,
      'lg:w-[550px]': !maximized && small,
      'lg:w-[950px]': !maximized && !small,
    }"
    @dragstart="startDrag"
    @drag="dragging"
    :draggable="maximized || windowWidth <= 1024 ? false : true"
    :style="{
      top: windowWidth <= 1024 || maximized ? 0 : (top && `${top}px`) || '40px',
      left:
        windowWidth <= 1024 || maximized
          ? 0
          : (left && `${left}px`) ||
            (small ? 'calc(50% - 275px)' : 'calc(50% - 475px)'),
    }"
    :id="`window-${index}`"
  >
    <div
      class="flex flex-wrap items-center justify-between bg-pink-light mt-0.5 mr-1 ml-0.5 rounded-t-2xl"
    >
      <div class="flex items-center gap-x-2.5 mt-1 mx-0.5">
        <img
          class="w-6"
          :src="require(`../../assets/images/${icon}`)"
          alt="heart"
        />
        <h4 class="text-[17px] lg:text-[25px] leading-none font-serif">
          {{ title }}
        </h4>
      </div>
      <div class="flex">
        <minimize-icon
          @click="minimize(index)"
          class="cursor-pointer hover:opacity-80"
        />
        <maximize-icon
          @click="updateMaximize"
          class="cursor-pointer hover:opacity-80"
          :class="{
            'pointer-events-none opacity-40':
              windowWidth <= 1024 || disableMaximize,
          }"
        />
        <close-window
          @click="onClose(index)"
          class="cursor-pointer hover:opacity-80"
        />
      </div>
      <div class="flex flex-wrap lg:flex-nowrap w-full px-2 pt-2">
        <button
          class="bg-button-gray mr-1 shadow-sm flex items-center py-1 text-black rounded-lg px-2"
          :class="{
            'opacity-50 pointer-events-none': !prevLinks.length,
            'hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]':
              prevLinks.length,
          }"
          @click.prevent="onBack"
        >
          <arrow-icon />
          Back
        </button>
        <button
          class="bg-button-gray mr-3 shadow-sm flex items-center py-1 text-black rounded-lg px-2"
          :class="{
            'opacity-50 pointer-events-none': !nextLinks.length,
            'hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]':
              nextLinks.length,
          }"
          @click.prevent="onNext"
        >
          <arrow-icon class="rotate-180" />
        </button>
        <div class="bg-pink-light mt-2 lg:mt-0 flex-grow mb-1">
          <p
            class="rounded-lg shadow-xl-hovered py-1 px-3 text-xl leading-snug opacity-80"
          >
            Sveta's portfolio
            <span v-if="folder"> / {{ folder }} / {{ title }}</span>
            <span v-if="!folder && !title.includes('portfolio')">
              / {{ title }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex font-normal py-6 px-2 text-lg leading-snug mr-1 mb-1 ml-0.5 rounded-b-2xl text-[25px] bg-pink-light lg:px-3 lg:py-2"
      :class="{
        ' h-full-screen-container-mob lg:h-full-screen-container ': maximized,
        'lg:overflow-scroll lg:h-window-restored mb-2': !maximized,
      }"
    >
      <sidebar-component
        v-if="!hideSidebar"
        class="overflow-hidden lg:block hidden"
        :class="{ 'w-1/3': maximized, 'w-1/4': !maximized }"
      />
      <div
        class="lg:ml-5 overflow-hidden w-full"
        :class="{ 'lg:w-2/3': maximized && !hideSidebar, 'lg:w-3/4': !maximized && !hideSidebar }"
      >
        <div class="py-2 bg-white h-full shadow-lg">
          <div
            :class="{
              'px-5 my-[4px] flex-grow': maximized,
            }"
            class="h-full overflow-scroll"
          >
            <div class="h-full w-full">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MinimizeIcon from "../../icons/Minimize.vue";
import ArrowIcon from "../../icons/Arrow.vue";
import MaximizeIcon from "../../icons/Maximize.vue";
import CloseWindow from "../../icons/CloseWindow.vue";
import SidebarComponent from "./Sidebar.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "window-component",
  data() {
    return {
      maximized: this.windowWidth > 1024 ? false : true,
      top: null,
      left: null,
      startTop: 0,
      startLeft: 0,
      endTop: 0,
      endLeft: 0,
    };
  },
  props: [
    "title",
    "minimized",
    "closed",
    "index",
    "query",
    "icon",
    "hideSidebar",
    "windowWidth",
    "openedWindows",
    "disableMaximize",
    "small",
    "folder",
  ],
  components: {
    MinimizeIcon,
    MaximizeIcon,
    CloseWindow,
    SidebarComponent,
    ArrowIcon,
  },
  computed: {
    ...mapState(["prevLinks", "nextLinks", "updatedLinks"]),
  },
  created() {
    if (this.$route.query.max === this.query) {
      this.onMaximize();
    }
    if (!this.$route.query.max && this.windowWidth > 1024) {
      this.onRestore();
    }
    if (this.windowWidth <= 1024) this.maximized = true;
    if (this.$route.query.open === this.query) {
      this.$router.push({
        path: this.$route.path,
        query: { max: this.$route.query.max, open: this.query },
      });
      this.$emit("open", this.index);
    } else {
      this.$router.push({
        path: this.$route.path,
        query: { max: this.$route.query.max, open: this.$route.query.open },
      });
      this.$emit("close", this.index);
    }
    document.body.addEventListener("drop", this.drop);
    document.body.addEventListener("dragover", this.allowDrop);
    document.body.addEventListener("dragend", this.endDrag);
  },
  watch: {
    $route(to) {
      this.reset();
      if (to.query.max === this.query) {
        this.onMaximize();
      } else {
        this.onRestore();
      }
      if (!to.query.max) {
        this.onRestore();
      }
      if (this.windowWidth <= 1024) this.maximized = true;
      if (to.query.open === this.query) {
        this.$emit("open", this.index);
        this.$emit("unminimize", this.index);
      } else if (to.query.open !== this.query && !this.closed) {
        this.$emit("close", this.index);
      }
    },
    windowWidth: function(newVal) { 
      if (newVal <= 1024) this.maximized = true
    }
  },
  methods: {
    ...mapMutations([
      "addNext",
      "addPrev",
      "removePrev",
      "removeNext",
      "updateUpdatedLinks",
      "resetLinks",
    ]),
    reset() {
      this.top = null;
      this.left = null;
      this.startTop = 0;
      this.startLeft = 0;
      this.endTop = 0;
      this.endLeft = 0;
    },
    minimize(index) {
      this.$emit("minimize", index);
      this.onRestore();
      this.$router.push({
        path: this.$route.path,
        query: { max: "", open: this.query },
      });
    },
    onClose() {
      this.resetLinks();
      this.updateUpdatedLinks();
      this.$router.push({
        path: this.$route.path,
        query: { max: "", open: "" },
      });
      this.onRestore();
    },
    onMaximize() {
      this.maximized = true;
      this.$emit("open", this.index);
      this.$emit("unminimize", this.index);
    },
    onRestore() {
      this.maximized = false;
    },
    updateMaximize() {
      if (this.windowWidth <= 1024) return;
      this.maximized = !this.maximized;
      if (this.maximized) {
        this.$router.push({
          path: this.$route.path,
          query: { max: this.query, open: this.openedWindows },
        });
      } else {
        this.$router.push({
          path: this.$route.path,
          query: { max: "", open: this.openedWindows },
        });
      }
    },
    startDrag(e) {
      if (this.maximized || this.window <= 1024) return;
      this.startTop = e.clientY;
      this.startLeft = e.clientX;
      const window = document.querySelector(`#window-${this.index}`);
      window.dataTransfer?.setData("text", `window-${this.index}`);
    },
    dragging() {
      if (this.maximized || this.window <= 1024) return;
      const window = document.querySelector(`#window-${this.index}`);
      this.getPosition(window);
    },
    drop(e) {
      if (this.maximized || this.window <= 1024) return;
      e.preventDefault();
      this.endTop = e.clientY;
      this.endLeft = e.clientX;
    },
    endDrag() {
      if (this.maximized || this.window <= 1024) return;
      const windowEl = document.querySelector(`#window-${this.index}`);
      if (windowEl) {
        this.top =
          this.endTop > this.startTop
            ? this.top + (this.endTop - this.startTop)
            : this.top - (this.startTop - this.endTop);
        this.left =
          this.endLeft > this.startLeft
            ? this.left + (this.endLeft - this.startLeft)
            : this.left - (this.startLeft - this.endLeft);
        windowEl.style.top = this.top;
        windowEl.style.left = this.left;
      }
    },
    allowDrop(e) {
      e.preventDefault();
    },
    getPosition(windowEl) {
      if (windowEl) {
        var rect = windowEl?.getBoundingClientRect();
        this.top = rect?.top;
        this.left = rect?.left;
      }
    },
    onBack() {
      const prevLinkMax = this.prevLinks[this.prevLinks.length - 1]?.max;
      const prevLinkOpen = this.prevLinks[this.prevLinks.length - 1]?.open;
      this.removePrev();
      this.addNext({ query: this.$route.query });
      this.updateUpdatedLinks();
      this.$router.push({
        name: "Home",
        query: {
          max: this.$route.query.max ? prevLinkMax || "" : "",
          open: prevLinkOpen || "",
        },
      });
    },
    onNext() {
      const nextLinkMax = this.nextLinks[this.nextLinks.length - 1]?.max;
      const nextLinkOpen = this.nextLinks[this.nextLinks.length - 1]?.open;
      this.removeNext();
      this.addPrev({ query: this.$route.query });
      this.updateUpdatedLinks();
      this.$router.push({
        name: "Home",
        query: {
          max: this.$route.query.max ? nextLinkMax || "" : "",
          open: nextLinkOpen || "",
        },
      });
    },
  },
};
</script>

<style lang="scss"></style>

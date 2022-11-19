<template>
  <div
    v-if="!minimized && !closed"
    ref="window"
    class="shadow-sm rounded-2xl overflow-hidden transition-all lg:min-w-[600px]"
    :class="{
      '!h-full-screen-mob lg:!h-full-screen !m-0 !max-w-none !fixed top-0 lg:top-0 left-0 w-full z-10':
        maximized || windowWidth <= 1024,
        'max-h-[70vh] absolute top-10 mx-auto w-[800px]': !maximized && windowWidth > 1024,
    }"
    @dragstart="startDrag"
      @drag="dragging"
      :draggable="(maximized || windowWidth <= 1024) ? false : true"
    :style="{top: (windowWidth <= 1024 || maximized) ? 0 : ((top && `${top}px`) || '40px'), left: (windowWidth <= 1024 || maximized) ? 0 : ((left && `${left}px`) || 'calc(50% - 400px)')}"
    :id="`window-${index}`"
  >
    <div
      class="flex items-center justify-between bg-pink-light mt-0.5 mr-1 ml-0.5 rounded-t-2xl"
      :class="{'absolute top-0 left-0 right-0': !maximized}"
    >
      <div class="flex items-center gap-x-2.5 mt-1 mx-0.5">
        <img class="w-6" :src="require(`../../assets/images/${icon}`)" alt="heart" />
        <h4 class="text-[17px] lg:text-[25px] leading-none font-serif">
          {{ title }}
        </h4>
      </div>
      <div class="flex">
        <minimize-icon
          @click="minimize(index)"
          class="opacity-40 cursor-pointer"
        />
        <maximize-icon
          @click="updateMaximize"
          class="opacity-40 cursor-pointer"
          :class="{'pointer-events-none': windowWidth <= 1024}"
        />
        <close-window @click="onClose(index)" class="opacity-40 cursor-pointer" />
      </div>
    </div>
    <div
      class="font-normal py-6 px-2 text-lg leading-snug mr-1 mb-1 ml-0.5 rounded-b-2xl text-[25px]"
      :class="{
        'flex h-full-screen-container-mob lg:h-full-screen-container bg-pink-light lg:px-3 lg:py-2':
          maximized,
          'lg:h-full lg:overflow-scroll mb-2 lg:py-14 lg:px-16 ': !maximized
      }"
    >
      <sidebar-component
        v-if="maximized && !hideSidebar"
        class="hidden lg:block w-1/3 overflow-hidden"
      />
      <div :class="{ 'flex-grow lg:ml-5 overflow-hidden': maximized }">
        <div v-if="maximized" class="bg-pink-light mb-1">
          <p
            class="rounded-lg shadow-xl-hovered py-1 px-3 text-xl leading-snug opacity-80"
          >
            Content
          </p>
        </div>
        <div class="py-2 bg-white h-window-content" :class="{'shadow-lg': maximized}">
        <div
          :class="{
            'px-5 my-[4px] flex-grow overflow-scroll h-full':
              maximized,
          }"
        >
          <div class="h-full w-full py-3">
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
import MaximizeIcon from "../../icons/Maximize.vue";
import CloseWindow from "../../icons/CloseWindow.vue";
import SidebarComponent from "./Sidebar.vue";
import { mapState } from "vuex";
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
      endLeft: 0
    };
  },
  props: ["title", "minimized", "closed", "index", "query", "icon", "hideSidebar", "windowWidth", "openedWindows"],
  components: {
    MinimizeIcon,
    MaximizeIcon,
    CloseWindow,
    SidebarComponent,
  },
  computed: {
    ...mapState(["screenHeightBody"]),
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
      this.$router.push({ path: this.$route.path, query: { max: this.$route.query.max, 'open': this.query }})
    } else {
      this.$router.push({ path: this.$route.path, query: { max: this.$route.query.max, 'open': this.$route.query.open }})
    }
    document.body.addEventListener('drop', this.drop)
    document.body.addEventListener('dragover', this.allowDrop)
    document.body.addEventListener('dragend', this.endDrag)
  },
  watch: {
    $route(to) {
      this.reset()
      if (to.query.max === this.query) {
        this.onMaximize();
      } else {
        this.onRestore();
      }
      if (!to.query.max) {
        this.onRestore();
      }
      if (this.windowWidth <= 1024) this.maximized = true;
      if (to.query.open === this.query && this.closed) {
        this.$emit("open", this.index);
        this.$emit("unminimize", this.index)
      } else if (to.query.open !== this.query && !this.closed) {
        this.$emit("close", this.index);
      }
    },
  },
  methods: {
    reset() {
      this.top = null
      this.left = null
      this.startTop = 0
      this.startLeft = 0
      this.endTop = 0
      this.endLeft = 0
    },
    minimize(index) {
      this.$emit("minimize", index);
      this.onRestore();
      this.$router.push({ path: this.$route.path, query: { max: '', 'open': this.query }})
    },
    onClose() {
      this.$router.push({ path: this.$route.path, query: { max: '', 'open': '' }})
      this.onRestore();
    },
    onMaximize() {
      this.maximized = true;
      this.$emit("open", this.index);
      this.$emit("unminimize", this.index)
    },
    onRestore() {
      this.maximized = false;
    },
    updateMaximize() {
      if (this.windowWidth <= 1024) return
      this.maximized = !this.maximized;
      if (this.maximized) {
        this.$router.push({ path: this.$route.path, query: { max: this.query, 'open': this.openedWindows}})
      } else {
        this.$router.push({ path: this.$route.path, query: { max: '', 'open': this.openedWindows }})
      }
    },
    startDrag(e) {
      if (this.maximized || this.window <= 1024) return
      this.startTop = e.clientY
      this.startLeft = e.clientX
      const window = document.querySelector(`#window-${this.index}`)
      window.dataTransfer?.setData("text", `window-${this.index}`);
    },
    dragging() {
      if (this.maximized || this.window <= 1024) return
      const window = document.querySelector(`#window-${this.index}`)
      this.getPosition(window)
    },
    drop(e) {
      if (this.maximized || this.window <= 1024) return
      e.preventDefault();
      this.endTop = e.clientY
      this.endLeft = e.clientX
    },
    endDrag() {
      if (this.maximized || this.window <= 1024) return
      const windowEl = document.querySelector(`#window-${this.index}`)
      if (windowEl) {
        this.top = this.endTop > this.startTop ? this.top + (this.endTop - this.startTop) : this.top - (this.startTop - this.endTop)
        this.left = this.endLeft > this.startLeft ? this.left + (this.endLeft - this.startLeft) : this.left - (this.startLeft - this.endLeft)
        windowEl.style.top = this.top
        windowEl.style.left = this.left
      }
    },
    allowDrop(e) {
      e.preventDefault()
    },
    getPosition(windowEl) {
      if (windowEl) {
        var rect = windowEl?.getBoundingClientRect();
        this.top = rect?.top
        this.left = rect?.left
      }
      
    }

  },
};
</script>

<style lang="scss"></style>

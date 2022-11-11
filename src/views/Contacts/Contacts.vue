<template>
  <div
    class="min-h-page custom-bg overflow-hidden py-11 lg:py-24 max-w-container mx-auto px-6 lg:px-25 relative"
  >
    <files-component :files="files" @open="onOpen" />
    <div class="lg:w-4/5 mx-auto">
      <window-component
        query="form"
        class="bg-yellow mb-10"
        title="sveta.exe"
        @minimize="onMinimize"
        @close="onClose"
        :minimized="tabs[0].minimized"
        :index="0"
        :icon="tabs[0].icon"
        :closed="tabs[0].closed"
      >
        <div>
          <div
            class="lg:flex flex-wrap justify-between items-end lg:mb-10 px-2 lg:px-0"
          >
            <h2 class="text-[32px] lg:text-[50px] leading-snug">
              Get in touch
            </h2>
            <a
              href="mailto:phuonhhangnguyen0929@gmail.com"
              class="text-base opacity-60 mb-4 lg:mb-2 leading-snug lg:text-[21px]"
              >phuonhhangnguyen0929@gmail.com</a
            >
          </div>
          <form-component class="px-2 lg:px-0" />
        </div>
      </window-component>
      <!-- <social-icons
        class="gap-8 flex justify-center lg:justify-start lg:mt-20 lg:flex-col lg:gap-16"
        :titled="true"
      /> -->
    </div>
  </div>
  <taskbar-component :tabs="tabs" @unMinimize="onUnMinimize" />
</template>

<script>
// import SocialIcons from '../components/SocialIcons.vue'
import WindowComponent from "../../components/Window/Window.vue";
import FormComponent from "./ContactsForm.vue";
// import SocialIcons from "../../components/SocialIcons.vue";
import TaskbarComponent from "../../components/Taskbar.vue";
import FilesComponent from "../../components/Files.vue";

export default {
  name: "contacts-page",
  components: {
    WindowComponent,
    FormComponent,
    // SocialIcons,
    TaskbarComponent,
    FilesComponent
  },
  data() {
    return {
      tabs: [{ icon: "heart.png", minimized: false, title: "sveta.exe" }],
      files: [{ name: "sveta.exe", icon: "heart.png" }],
    };
  },
  methods: {
    onUnMinimize(index) {
      this.tabs[index].minimized = false;
    },
    onMinimize(index) {
      this.tabs[index].minimized = true;
    },
    onClose(index) {
      this.tabs[index].closed = true
    },
    onOpen(index) {
      this.tabs[index].closed = false
      this.tabs[index].minimized = false
    }
  },
};
</script>

<style lang="scss">
.custom-bg {
  background: url("../../assets/images/contact-mobile.jpg") no-repeat
    0 0/cover;
}
@media screen and (min-width: 1024px) {
  .custom-bg {
    background: url("../../assets/images/contact.jpg") no-repeat 0 0/cover;
  }
}
</style>

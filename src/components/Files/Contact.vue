<template>
  <div class="ml-1 px-4 py-5 bg-yellow-100 h-full mr-1 my-[4px]">
    <div class="mb-4 flex items-center">
      <span class="block w-14 opacity-80 text-xl">To</span>
      <a
        href="mailto:phuonhhangnguyen0929@gmail.com"
        class="text-base opacity-60 leading-snug lg:text-[21px]"
        >phuonhhangnguyen0929@gmail.com</a
      >
    </div>
    <form-component class="lg:px-0 pb-5" />
  </div>
</template>

<script>
import FormComponent from "./ContactForm.vue";
export default {
  name: "ContactComponent",
  components: {
    FormComponent,
  },
  data() {
    return {
      files: [{ title: "Contact", query: "contact", icon: "files.png", isFile: true, hideSidebar: true }],
    };
  },
};
</script>

<style></style>

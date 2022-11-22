<template>
  <div class="px-4 py-10">
          <div
            class="lg:flex flex-wrap justify-between items-end lg:mb-10"
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
          <form-component class="lg:px-0 pb-5" />
        </div>
</template>

<script>
import FormComponent from './ContactForm.vue'
export default {
    name: 'ContactComponent',
    components: {
        FormComponent
    },
    data() {
        return {
            files: [
                {  name: "Contact", query: 'contact', icon: 'files.png' },
            ],
        }
    }
}
</script>

<style>

</style>
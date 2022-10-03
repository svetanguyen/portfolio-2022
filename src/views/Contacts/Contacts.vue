<template>
  <div class="min-h-page custom-bg overflow-hidden py-11 lg:py-24 max-w-container mx-auto px-6 lg:px-25">
      <div class="lg:flex lg:flex-row-reverse lg:justify-between lg:gap-[154px]">
        <window-component class="bg-yellow mb-10 lg:flex-1" title="sveta.exe">
          <div class="lg:flex flex-wrap justify-between items-end lg:mb-10 px-2 lg:px-0">
            <h2 class="text-[32px] lg:text-[50px] leading-snug">Get in touch</h2>
            <a href="mailto:phuonhhangnguyen0929@gmail.com" class="text-base opacity-60 mb-4 lg:mb-2 leading-snug lg:text-[21px]">phuonhhangnguyen0929@gmail.com</a>
          </div>
          <form-component class="px-2 lg:px-0" />
        </window-component>
        <social-icons class="gap-8 flex justify-center lg:justify-start lg:mt-20 lg:flex-col lg:gap-16" :titled="true" />
      </div>
  </div>
</template>

<script>
// import SocialIcons from '../components/SocialIcons.vue'
import WindowComponent from '../../components/Window.vue'
import FormComponent from './ContactsForm.vue'
import SocialIcons from '../../components/SocialIcons.vue'
export default {
    name: 'contacts-page',
    components: {
      WindowComponent,
      FormComponent,
      SocialIcons
    },
}
</script>

<style lang="scss">
.custom-bg {
      background: url('../../assets/images/contact-mobile.jpg') no-repeat center/cover;
    }
    @media screen and (min-width: 1024px) {
      .custom-bg {
        background: url('../../assets/images/contact.jpg') no-repeat center/cover;
      }
      }
</style>


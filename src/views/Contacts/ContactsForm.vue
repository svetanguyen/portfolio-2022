<template>
  <div>
    <form @submit.prevent="sendEmail">
      <div class="mb-4">
        <input
          class="block w-full lg:py-1 px-2 text-base text-border-gray placeholder:text-border-gray placeholder:text-base placeholder:lg:text-4xl placeholder:leading-none rounded-lg border-2 border-border-gray bg-gray-100 placeholder:opacity-40 lg:text-4xl leading-none py-2"
          v-model="name"
          type="text"
          placeholder="Full Name"
          name="name"
        />
        <p v-show="errorName" class="text-red-600 text-sm mt-2 pl-2">
          Please enter your name
        </p>
      </div>
      <div class="mb-4">
        <input
          class="block w-full lg:py-1 px-2 text-base text-border-gray placeholder:text-border-gray placeholder:text-base placeholder:lg:text-4xl placeholder:leading-none rounded-lg border-2 border-border-gray bg-gray-100 placeholder:opacity-40 lg:text-4xl leading-none py-2"
          v-model="email"
          type="email"
          placeholder="Email"
          name="email"
        />
        <p v-show="errorEmail" class="text-red-600 text-sm mt-2 pl-2">
          Please enter your email
        </p>
      </div>
      <div class="mb-4">
        <textarea
          class="block lg:mb-14 w-full lg:py-1 px-2 text-base text-border-gray placeholder:text-border-gray placeholder:text-base placeholder:lg:text-4xl placeholder:leading-none rounded-lg border-2 border-border-gray bg-gray-100 placeholder:opacity-40 lg:text-4xl leading-none py-2"
          v-model="message"
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
        ></textarea>
        <p v-show="errorMessage" class="text-red-600 text-sm mt-2 pl-2">
          Please enter the message
        </p>
      </div>

      <button
        class="w-full lg:w-[312px] mx-auto block text-center rounded-lg rounded-br-2xl bg-button-gray shadow-sm text-lg py-3 px-[30px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]"
        type="submit"
      >
        Send
      </button>
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  name: "form-component",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      errorName: false,
      errorEmail: false,
      errorMessage: false,
      sentSuccessfully: false,
    };
  },
  methods: {
    sendEmail: function (e) {
      this.errorName = false;
      this.errorEmail = false;
      this.errorMessage = false;
      if (!this.name) {
        this.errorName = true;
        return;
      }
      if (!this.email) {
        this.errorEmail = true;
        return;
      }
      if (!this.message) {
        this.errorMessage = true;
        return;
      }
      emailjs
        .sendForm(
          process.env.VUE_APP_SERVICE_KEY,
          "template_4epkp3w",
          e.target,
          process.env.VUE_APP_PUBLIC_KEY,
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        )
        .then(
          (result) => {
            console.log("result", result);
            console.log("SUCCESS!", result.status, result.text);
            this.sentSuccessfully = true;
            this.name = "";
            this.email = "";
            this.message = "";
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
    closeWindow: function () {
      this.sentSuccessfully = false;
    },
  },
};
</script>

<style lang="scss"></style>

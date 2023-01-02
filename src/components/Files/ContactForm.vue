<template>
  <div>
    <form @submit.prevent="sendEmail">
      <div class="mb-4 flex items-center">
          <label for="Name" class="block w-14 mr-2 opacity-80 text-xl">Name</label>
          <input
            class="block w-full focus:outline-pink-bright focus-visible:outline-pink-bright px-2 py-1 text-base text-border-gray placeholder:text-border-gray placeholder:text-base placeholder:lg:text-xl placeholder:leading-none border-2 border-border-gray bg-gray-100 placeholder:opacity-40 lg:text-xl leading-5"
            v-model="name"
            type="text"
            placeholder="Full Name"
            name="name"
            id="Name"
          />
          <p v-show="errorName" class="text-red-600 text-sm mt-2 pl-2">
            Please enter your name
          </p>
      </div>
      <div class="mb-4 flex items-center">
        <label for="Email" class="block mr-2 w-14 opacity-80 text-xl">Email</label>
        <input
          class="block w-full focus:outline-pink-bright focus-visible:outline-pink-bright px-2 py-1 text-base text-border-gray placeholder:text-border-gray placeholder:text-base placeholder:lg:text-xl placeholder:leading-none border-2 border-border-gray bg-gray-100 placeholder:opacity-40 lg:text-xl leading-5"
          v-model="email"
          type="email"
          placeholder="Email"
          name="email"
          id="Email"
        />
        <p v-show="errorEmail" class="text-red-600 text-sm mt-2 pl-2">
          Please enter your email
        </p>
      </div>
      <div class="mb-4">
        <textarea
          class="block w-full focus:outline-pink-bright focus-visible:outline-pink-bright px-2 py-1 text-base text-border-gray placeholder:text-border-gray placeholder:text-base placeholder:lg:text-xl placeholder:leading-none border-2 border-border-gray bg-gray-100 placeholder:opacity-40 lg:text-xl leading-5"
          v-model="message"
          name="message"
          placeholder="Message"
          cols="30"
          rows="6"
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
            this.openSuccessDialog()
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
    openSuccessDialog: function() {
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          dialog: 'form-success'
        }
      })
    }
  },
};
</script>

<style lang="scss"></style>

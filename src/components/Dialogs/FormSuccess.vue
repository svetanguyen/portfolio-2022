<template>
  <div class="text-center py-5 px- h-full flex lg:block flex-col items-center justify-center">
      <p>This form was sent successfully</p>
      <button @click="closeDialog" aria-label="close dialog" class="w-full lg:w-[150px] mt-5 mx-auto block text-center rounded-lg rounded-br-2xl bg-button-gray shadow-sm text-lg py-3 px-[30px] hover:shadow-sm-hovered hover:translate-x-[2px] hover:translate-y-[2px]" type="button">OK</button>
  </div>
</template>

<script>
export default {
    name: "success-component",
    methods: {
        closeDialog() {
            this.$router.push({
                path: this.$route.path,
                query: {
                    ...this.$route.query,
                    dialog: '',
                    file: ''
                }
            })
        }
    }
}
</script>

<style>

</style>
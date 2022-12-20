<template>
  <div class="p-3">
    <p>
      {{content}}
    </p>
  </div>
</template>

<script>
export default {
    name: 'text-component',
    props: ["content"],
    created() {
      console.log('this', this.content)
    }
}
</script>

<style>

</style>
<template>
  <ul>
        <li>
            <router-link class="py-4 px-4 text-[23px] lg:text-xl leading-none block text-black lg:text-[23px] lg:p-0" :to="{name: 'Home'}">Home</router-link>  
        </li>
        <li>
            <router-link class="py-4 px-4 text-[23px] lg:text-xl leading-none block text-black lg:text-[23px] lg:p-0" :to="{name: 'About'}">About</router-link>
        </li>
        <li>
            <router-link class="py-4 px-4 text-[23px] lg:text-xl leading-none block text-black lg:text-[23px] lg:p-0" :to="{name: 'Works'}">Works</router-link>
        </li>
        <li>
            <router-link class="py-4 px-4 text-[23px] lg:text-xl leading-none block text-black lg:text-[23px] lg:p-0" :to="{name: 'Contacts'}">Contacts</router-link>
        </li>
  </ul>
</template>

<script>
export default {
    name: 'menu-links',
    data() {
        return {
            route: this.$route
        }
    } 
}
</script>

<style lang="scss">
</style>
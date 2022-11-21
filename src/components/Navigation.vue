<template>
    <div class="flex absolute bottom-full left-0 shadow-sm">
        <p class="origin-center	rotate-180 bg-dark-pink py-6 px-2 text-white tracking-[1px] text-xl	leading-snug">
            Sveta Nguyen
        </p>
        <div class="bg-pink-light flex-grow">
            <menu-links />
        </div>
    </div>
</template>

<script>
import MenuLinks from './MenuLinks.vue'
export default {
    name: "navigation-component",
    props: ['windowWidth'],
    components: {
        MenuLinks
    }
}
</script>

<style scoped>
p {
    writing-mode: vertical-lr;
}

</style>
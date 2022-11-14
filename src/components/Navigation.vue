<template>
    <div class="flex absolute bottom-full left-0 shadow-sm">
        <p class="origin-center	rotate-180 bg-dark-pink py-6 px-2 text-white tracking-[1px] text-xl	leading-snug">
            Sveta Nguyen
        </p>
        <div class="pl-4 py-3 lg:py-8 bg-pink-light pr-8">
            <menu-links class="flex flex-col lg:gap-6" />
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
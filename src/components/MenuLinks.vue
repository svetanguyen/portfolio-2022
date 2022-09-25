<template>
  <ul class="menu-links" :class="{mobileHidden: !mobileShow}">
        <li>
            <router-link class="link" :to="{name: 'Home'}">Home</router-link>
            
        </li>
        <li>
            <router-link class="link" :to="{name: 'Works'}">Works</router-link>
        </li>
        <li>
            <router-link class="link" :to="{name: 'About'}">About</router-link>
        </li>
        <!-- <router-link class="link" :to="{name: 'About'}"><span>A</span>bout</router-link>
        <router-link class="link" :to="{name: 'Contacts'}"><span>C</span>ontact</router-link>  -->
  </ul>
</template>

<script>
export default {
    name: 'menu-links',
    props: ['mobileShow'],
    data() {
        return {
            route: this.$route
        }
    } 
}
</script>

<style lang="scss">
    .menu-links {
         @media screen and (min-width: 1008px) {
            display: flex;
            gap: 44px;
            justify-content: flex-end;
        }
        .link {
            font-size: 20px;
            line-height: 1;
            color: var(--black);
            display: block;
            @media screen and (max-width: 1007px) {
                padding: 16px 42px;
                &:hover {
                    background: var(--pink);
                }
            }
            @media screen and (min-width: 1008px) {
                font-size: 23px;
                padding: 0;
            }
        }
    }
    
</style>
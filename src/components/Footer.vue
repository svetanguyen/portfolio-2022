<template>
  <footer class="footer-wrapper">
      <nav class="container">
          <div class="footer-header">
              <h2 class="logo"><router-link :to="{name: 'Home'}">Sveta</router-link></h2>
              <social-icons :colored="true" />
          </div>
           <menu-links :mobileShow="true" />
           <div class="copyright">
            <h3>© Hang Nguyen 2022</h3>
            <social-icons />
            <h3>Design: Tin Bui</h3>
           </div>
      </nav>
  </footer>
</template>

<script>
import MenuLinks from './MenuLinks.vue'
import SocialIcons from './SocialIcons.vue'
export default {
    name: 'FooterComponent',
    components: {
        SocialIcons,
        MenuLinks
    }
}
</script>

<style lang="scss">
.footer-wrapper {
    background: var(--pink-light);
    padding-top: 20px;
    padding-bottom: 24px;
    box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #FFFFFF, inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
    .footer-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        @media screen and (min-width: 1008px) {
            display: none;
        }
    }
    h3 {
        color: var(--black);
        font-size: 18px;
        line-height: 1;
    }
    .copyright {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media screen and (max-width: 1007px) {
            padding-top: 28px;
        }
        .social-icons {
            @media screen and (max-width: 1007px) {
                display: none;
            }
        }
    }
    .social-icons {
        gap: 15px;
        @media screen and (min-width: 1008px) {
                gap: 32px;
            }
    }
    
    .menu-links {
        .link {
            padding-left: 10px;
        }
        @media screen and (min-width:1008px) {
            display: none;
        }
    }

}
    
</style>
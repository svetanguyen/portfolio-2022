<template>
  <header-component />
  <router-view />
  <footer-component />
</template>

<script>
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
:root {
  --pink: #db8ee7;
  --pink-light: #f9cbd5;
  --pink-bright: #D24ECD;
  --background: linear-gradient(
    180deg,
    #c273ed 0%,
    #f1a6e2 78.96%,
    #feb4df 100%
  );
  --black: #000;
  --heading-font: "VT323";
  --body-font: "W95FA";
  --border-gray: #aaa;
  --button-gray: #ccc;
  --yellow: #F9ECB7;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--body-font);
  font-weight: normal;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: var(--heading-font);
  a {
    font-family: var(--heading-font);
  }
}

.logo {
  font-size: 39px;
  line-height: 1;
  a {
    color: var(--black);
  }
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  background: var(--background);
  min-height: 100vh;
}

.mobileHidden {
  @media screen and (max-width: 1007px) {
    display: none;
  }
}

.container {
  padding: 0 24px;
  max-width: 1240px;
  margin: 0 auto;
  @media screen and (min-width: 1008px) {
    padding: 0 100px;
  }
}

.page {
  padding-top: 44px;
  padding-bottom: 44px;
  min-height: calc(100vh - 178px);
}

.button {
  color: var(--black);
  font-size: 18px;
  line-height: 140%;
  text-align: center;
  display: block;
  padding: 13px 18px;
  @media screen and (min-width: 1008px) {
    font-size: 20px;
  }
  &:hover {
    transform: translate(2px, 2px);
  }
  &.button-grey {
    background: var(--button-gray);
    box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #ffffff,
      inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
    &:hover {
      transform: translate(2px, 2px);
      box-shadow: inset 0 0 0 #000000, inset 2px 2px 0px #ffffff,
        inset -2px -2px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
    }
  }

  &.bordered {
    border-radius: 8px;
  }
}

@font-face {
  font-family: "VT323";
  src: url("./assets/fonts/VT323-Regular.eot");
  src: url("./assets/fonts/VT323-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/VT323-Regular.woff2") format("woff2"),
    url("./assets/fonts/VT323-Regular.woff") format("woff"),
    url("./assets/fonts/VT323-Regular.ttf") format("truetype"),
    url("./assets/fonts/VT323-Regular.svg#VT323-Regular") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "W95FA";
  src: url("./assets/fonts/W95FARegular.eot");
  src: url("./assets/fonts/W95FARegular.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/W95FARegular.woff2") format("woff2"),
    url("./assets/fonts/W95FARegular.woff") format("woff"),
    url("./assets/fonts/W95FARegular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
</style>

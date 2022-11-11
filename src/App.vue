<template>
  <router-view />
  <footer-component />
</template>

<script>
import FooterComponent from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    FooterComponent
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

body {
  background: var(--background);
  min-height: 100vh;
  overflow: hidden;
  padding-bottom: 84px;
}

.router-link-active {
  text-decoration: underline;
}

</style>

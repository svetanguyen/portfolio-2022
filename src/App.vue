<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");

:root {
  --pink: #db8ee7;
  --pink-light: #f9cbd5;
  --pink-bright: #d24ecd;
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
  --yellow: #f9ecb7;
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
  height: 100vh;
  overflow: hidden;
  position: relative;
  padding-bottom: 84px;
    &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("./assets/images/filter.png") no-repeat 50% 50% / cover;
    z-index: 100;
    cursor: none;
    pointer-events: none;
  }
}
</style>

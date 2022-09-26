<template>
  <div class="window-component">
    <div class="window-component__header">
      <div>
        <img :src="require(`../assets/images/heart.png`)" alt="heart" />
        <h4>{{ title }}</h4>
      </div>
      <img
        :src="require(`../assets/images/browser-icons.png`)"
        alt="browser icons"
      />
    </div>
    <div class="window-component__body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "window-component",
  props: ["title", ""],
};
</script>

<style lang="scss">
.window-component {
  box-shadow: inset -2px -2px 0px #000000, inset 2px 2px 0px #FFFFFF, inset -4px -4px 0px #717171, inset 4px 4px 0px rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  overflow: hidden;
  h4 {
    font-size: 17px;
    line-height: 1;
    font-family: var(--body-font);
    @media screen and (min-width: 1008px) {
      font-size: 25px;
    }
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--pink-light);
    margin: 2px 4px 0 2px;
    border-radius: 16px 16px 0 0;
    padding: 5px;
    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  &__body {
    background: #fff;
    font-weight: 400;
    padding: 24px 9px;
    font-size: 18px;
    line-height: 140%;
    margin: 0 4px 4px 2px;
    border-radius: 0 0 16px 16px;
    p {
      padding: 0 15px;
    }
    @media screen and (min-width: 1008px) {
      padding: 57px 66px;
      font-size: 25px;
    }
  }
}
</style>

<template>
  <div class="section-header">
    <div>
      <img :src="require(`../assets/images/heart.png`)" alt="heart" />
      <h4>{{ title }}</h4>
    </div>
    <img
      :src="require(`../assets/images/browser-icons.png`)"
      alt="browser icons"
    />
  </div>
</template>

<script>
export default {
  name: "section-header",
  props: ["title"],
};
</script>

<style lang="scss">
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--pink-light);
  padding: 5px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}
</style>

<template>
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="{reversed: reversed}"
  >
    <g opacity="0.2">
      <path
        d="M30.084 11.0833L25.334 11.0833L22.1673 17.4166L22.1673 26.9166L31.6673 26.9166V17.4166L26.9173 17.4166L30.084 11.0833ZM14.2506 11.0833L9.50065 11.0833L6.33399 17.4166L6.33398 26.9166L15.834 26.9166L15.834 17.4166L11.084 17.4166L14.2506 11.0833Z"
        fill="black"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "quotes-icon",
  props: ['reversed']
};
</script>

<style lang="scss" scoped>
    svg {
        &.reversed {
            transform: rotate(180deg);
            transform-origin: 50% 50%;
        }
    }
</style>

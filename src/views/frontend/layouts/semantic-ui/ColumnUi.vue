<template>
  <div :class="'column ' + extra_class">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    extra_class: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
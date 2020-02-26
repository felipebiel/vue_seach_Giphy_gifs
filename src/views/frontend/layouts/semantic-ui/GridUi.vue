<template>
  <div :class="'ui grid ' + extra_class">
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
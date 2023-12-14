<template>
  <div>jfidj</div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const getPadding = (el: HTMLElement) => {
  const sytle = window.getComputedStyle(el, null);
  const paddingLeft = Number.parseInt(sytle.paddingLeft, 10) || 0;
  const paddingright = Number.parseInt(sytle.paddingRight, 10) || 0;
  const paddingTop = Number.parseInt(sytle.paddingTop, 10) || 0;
  const paddingBottom = Number.parseInt(sytle.paddingBottom, 10) || 0;
  return {
    left: paddingLeft,
    right: paddingright,
    top: paddingTop,
    bottom: paddingBottom,
  };
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

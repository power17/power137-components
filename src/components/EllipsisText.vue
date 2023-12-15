<template>
  <div ref="ellipsisRef" class="ellipsis box">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
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

const checkEllisis = (el: HTMLElement) => {
  const range = document.createRange();
  range.setStart(el, 0);
  range.setEnd(el, el.childNodes.length);
  console.log(range, el.childNodes);
};
const ellipsisRef = ref(null);
onMounted(() => {
  if (ellipsisRef.value) {
    checkEllisis(ellipsisRef.value);
  }
});
</script>

<style scoped>
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.box {
  border: 1px solid gray;
  padding: 10px;
}
</style>

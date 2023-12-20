<template>
  <div class="el-scrollbar">
    <div class="el-scrollbar__wrap">
      <div class="el-scrollbar__view">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
let scrollBarWidth;
const scrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.className = 'el-scrollbar__wrap';
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);

  /**
   * offsetWidth 获取宽
   * @type {number}
   */
  const widthNoScroll = outer.offsetWidth; // 父元素宽
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth; // 子元素宽
  outer.parentNode?.removeChild(outer);
  // 父元素 - 子元素 = 滚动条宽(父元素宽还包含滚动条宽)
  scrollBarWidth = widthNoScroll - widthWithScroll;

  return scrollBarWidth;
};
onMounted(() => {
  let gutter = scrollbarWidth();
  console.log(gutter);
});
</script>
<style></style>

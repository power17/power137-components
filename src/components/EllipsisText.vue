<template>
  <div ref="ellipsisRef" @mouseenter="checkEllisis" class="ellipsis box">
    <span>fnidn</span>Lorem ipsum dolor sit amet consectetur123123
  </div>
  <div>{{ result }}</div>
</template>
<script lang="ts" setup>
// 可参考 https://www.naiveui.com/zh-CN/os-theme/components/ellipsis
import { ref, onMounted, Ref } from 'vue';
const getPadding = (el: HTMLElement) => {
  const sytle = window.getComputedStyle(el, null);
  const paddingLeft = Number.parseInt(sytle.paddingLeft, 10) || 0;
  const paddingright = Number.parseInt(sytle.paddingRight, 10) || 0;
  const paddingTop = Number.parseInt(sytle.paddingTop, 10) || 0;
  const paddingBottom = Number.parseInt(sytle.paddingBottom, 10) || 0;
  return {
    pLeft: paddingLeft,
    pRight: paddingright,
    top: paddingTop,
    bottom: paddingBottom,
  };
};
const result = ref('null');
const checkEllisis = (e: MouseEvent) => {
  const box = e.target as HTMLElement;
  const range = document.createRange();
  range.setStart(box, 0);
  range.setEnd(box, box.childNodes.length);
  console.log(box.childNodes, 'childNodes');
  let rangeWidth = range.getBoundingClientRect().width;
  // let rangeHeight = range.getBoundingClientRect().height;
  // const contentWidth = rangeWidth - Math.floor(rangeWidth);
  const { pLeft, pRight } = getPadding(box);
  const horizontalPadding = pLeft + pRight;
  if (rangeWidth + horizontalPadding > box.clientWidth) {
    console.log('存在省略号');
  } else {
    console.log('容器宽度足够，没有省略号了');
  }
};
const ellipsisRef = ref(null);
</script>

<style scoped>
.box {
  width: 300px;
}
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

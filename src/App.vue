<template>
  <s-button size="large" :disabled="true" type="primary" @click="confirm"
    >large</s-button
  >
  <s-button size="medium" type="primary">medium</s-button>
  <s-button size="small" type="primary">small</s-button>
  <s-button size="large" type="primary" block>confirm</s-button>
  <s-button size="large" block>cancel</s-button>
</template>
<script lang="ts" setup>
const confirm = () => {
  console.log('confirm');
};
</script>
<style scoped></style>

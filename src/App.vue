<template>
  <s-button size="large" :disabled="true" type="primary" @click="confirm"
    >large</s-button
  >
  <s-button size="medium" type="primary">medium</s-button>
  <s-button size="small" type="primary">small</s-button>
</template>
<script setup>
const confirm = () => {
  console.log('confirm');
};
</script>
<style scoped></style>

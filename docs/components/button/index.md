# button

:::demo 使用`s-button`创建一个按钮。

```vue
<template>
  <div class="type">
    <s-button type="primary">确定</s-button>
    <s-button type="secondary">取消</s-button>
    <s-button type="text">text</s-button>
  </div>

  <s-button size="large" :disabled="true" type="primary" @click="confirm"
    >large</s-button
  >
  <s-button size="medium" type="primary">medium</s-button>
  <s-button size="small" type="primary">small</s-button>
  <s-button size="large" type="primary" block>confirm</s-button>
  <s-button size="large" block>cancel</s-button>
</template>
<style scope>
.type {
  margin-bottom: 10px;
}
</style>
```

:::

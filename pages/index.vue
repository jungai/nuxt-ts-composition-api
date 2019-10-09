<template>
  <div class="container">
    <h1 class="text">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api';
export default createComponent({
  setup() {
    const msg = ref('Hello World !');

    return { msg };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .text {
    font-size: 3em;
  }
}
</style>

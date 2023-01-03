<template>
  <button class="myBtn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style lang="scss" scoped>
.myBtn {
  color: #669bf1;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid var(--blue);
  border-radius: 6px;
  background: transparent;
  padding: 8px 25px;

  &:hover {
    color: white;
    background: var(--blue);
  }
}
</style>

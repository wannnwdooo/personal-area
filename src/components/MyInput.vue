<template>
  <input class="input" />
</template>

<script>
export default {
  name: "MyInput",
};
</script>

<style lang="scss" scoped>
.input {
  padding: 6px 15px;
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: 1px solid var(--blue);
  }
}
</style>

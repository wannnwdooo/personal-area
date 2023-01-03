<template>
  <textarea rows="10" class="textArea"></textarea>
</template>

<script>
export default {
  name: "MyTextarea",
};
</script>

<style lang="scss" scoped>
.textArea {
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  resize: none;

  &:focus {
    outline: 1px solid var(--blue);
  }
}
</style>

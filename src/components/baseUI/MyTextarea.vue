<template>
  <div>
    <p class="textAreaCount">Символов: {{ count }}</p>
    <textarea
      :placeholder="textareaPlaceholder"
      rows="10"
      class="textArea"
      :value="modelValue"
      @input="countValue"
    ></textarea>
  </div>
</template>

<script>
export default {
  name: "MyTextarea",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    textareaPlaceholder: String,
    modelValue: String,
  },
  methods: {
    countValue(event) {
      const value = event.target.value;
      this.count = value.length;
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.textArea {
  border: 1px solid var(--gray);
  border-radius: 5px;
  font-size: 16px;
  padding: 10px;
  resize: none;
  width: 100%;

  &:focus {
    outline: 1px solid var(--blue);
  }
}

.textAreaCount {
  color: var(--gray);
  text-align: end;
}
</style>

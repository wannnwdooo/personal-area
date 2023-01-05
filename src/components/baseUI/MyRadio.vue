<template>
  <label :for="value" class="radioLabel">
    <input
      type="radio"
      :value="value"
      :id="value"
      :name="name"
      :checked="value === modelValue"
      @change="updateRadio"
      class="radioInput"
    />
    <span class="radioFakeInput" />
    <span>
      <slot>{{ value }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "MyRadio",
  props: {
    value: {
      type: String,
      default: null,
    },
    name: {
      type: String,
    },
    modelValue: { type: String, default: null },
  },
  methods: {
    updateRadio(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";
.radioLabel {
  @extend .customLabel;

  .radioInput {
    display: none;

    &:checked + .radioFakeInput {
      border: 1px solid var(--blue);

      &:before {
        opacity: 1;
      }
    }
  }

  .radioFakeInput {
    @extend .customFakeInput;
  }
}
</style>

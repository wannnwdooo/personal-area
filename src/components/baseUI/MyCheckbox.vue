<template>
  <label :for="value" class="checkboxLabel">
    <input
      type="checkbox"
      :id="value"
      :value="modelValue"
      :name="name"
      :checked="modelValue"
      @change="updateCheckbox"
      class="checkboxInput"
    />
    <span class="checkboxFakeInput" />
    <span>
      <slot>{{ name }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "MyCheckbox",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
    modelValue: { type: Boolean },
  },
  methods: {
    updateCheckbox(event) {
      this.$emit("update:modelValue", event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";
.checkboxLabel {
  @extend .customLabel;

  .checkboxInput {
    display: none;

    &:checked + .checkboxFakeInput {
      border: 1px solid var(--blue);

      &:before {
        opacity: 1;
      }
    }
  }

  .checkboxFakeInput {
    @extend .customFakeInput;
  }
}
</style>

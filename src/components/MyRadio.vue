<template>
  <label :for="value" class="customRadio">
    <input
      type="radio"
      :id="value"
      :value="value"
      :name="name"
      :checked="checked"
    />
    <span class="customRadioInput" />
    <span class="customRadioText">
      <slot>{{ value }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: "MyRadio",
  props: {
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    checked: String,
  },
};
</script>

<style lang="scss" scoped>
.customRadio {
  display: flex;
  align-items: center;

  input {
    display: none;

    &:checked + .customRadioInput {
      border: 1px solid var(--blue);

      &:before {
        opacity: 1;
      }
    }
  }

  .customRadioInput {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid var(--gray);
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 1px;
      background: var(--blue);
      opacity: 0;
      transition: 0.2s;
    }
  }
}
</style>

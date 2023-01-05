<template>
  <div class="showForm">
    <div :key="i" v-for="(item, i) in form" class="formItem">
      <span class="formItemKey">{{ i }}:</span>
      <span class="formItemValue">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowFormData",
  props: {
    form: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      gender: { type: String, required: true },
      message: { type: String, required: true },
      agree: { type: Boolean, required: true },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";
.showForm {
  @extend .customForm;
  outline: 1px solid #669bf1;
  text-align: start;

  .formItem {
    display: flex;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .formItemKey {
    display: inline-block;
    color: var(--gray);
    min-width: 5rem;
    height: 30px;
    margin-right: 2rem;
  }

  .formItemValue {
    color: black;
  }
}
</style>

<template>
  <div class="modalWindow" v-if="show" @click="hideModal">
    <div @click.stop class="modalContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalWindow",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss" scoped>
.modalWindow {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
.modalContent {
  margin: auto;
  background: white;
  border-radius: 10px;
  border: 2px solid var(--blue);
  padding: 20px;
}
</style>

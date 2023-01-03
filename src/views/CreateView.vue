<template>
  <div class="create">
    <h1 class="createTitle">Добавить запись</h1>
    <PostForm />
  </div>
</template>
<style lang="scss" scoped>
.create {
  background: #f3f6ff;
}
.createTitle {
  margin: 20px 0 20px 30px;
  text-align: start;
  font-size: 22px;
}
</style>
<script setup>
import PostForm from "@/components/PostForm.vue";
</script>

<template>
  <div class="create">
    <h1 class="createTitle">Добавить запись</h1>
    <div class="formContainer">
      <PostForm @sendForm="sendForm" />
      <ShowFormData :form="form" v-if="showForm" />
    </div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import ShowFormData from "@/components/ShowFormData.vue";

export default {
  name: "CreateModule",
  components: { ShowFormData, PostForm },
  data() {
    return {
      form: {
        name: null,
        email: null,
        gender: null,
        message: null,
        agree: null,
      },
      showForm: false,
    };
  },
  methods: {
    sendForm(values) {
      this.form = values;

      const validationForm = Object.values(this.form).some(
        (value) => value === null || value === false
      );
      this.showForm = validationForm === false;
    },
  },
};
</script>

<style lang="scss" scoped>
.create {
  background: #f3f6ff;
}
.createTitle {
  margin: 20px 0 20px 30px;
  text-align: start;
  font-size: 22px;
}

.formContainer {
  display: flex;

  &:last-child {
    margin-right: 30px;
  }
}
</style>

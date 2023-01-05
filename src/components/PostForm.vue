<template>
  <form class="form">
    <MyInput
      v-model="formValues.name"
      class="formInput"
      type="text"
      placeholder="Имя"
    />
    <MyInput
      v-model="formValues.email"
      class="formInput"
      type="email"
      placeholder="Email"
    />
    <p class="genderTitle">Пол</p>
    <div class="formRadioContainer">
      <MyRadio
        v-model="formValues.gender"
        :key="radio.value"
        v-for="radio in radioButtons"
        :value="radio.value"
        :name="radio.name"
        class="formRadio"
      />
    </div>
    <MyTextarea
      v-model="formValues.message"
      :textareaPlaceholder="textareaPlaceholder"
      class="formTextarea"
    />
    <MyCheckbox
      v-model="formValues.agree"
      :name="checkboxButton.name"
      :value="checkboxButton.value"
      class="formCheckbox"
    />
    <div class="formButton">
      <MyButton @click.prevent="sendFormValues">Отправить</MyButton>
    </div>
  </form>
</template>

<script>
import MyInput from "@/components/baseUI/MyInput.vue";
import MyRadio from "@/components/baseUI/MyRadio.vue";
import MyTextarea from "@/components/baseUI/MyTextarea.vue";
import MyCheckbox from "@/components/baseUI/MyCheckbox.vue";
import MyButton from "@/components/baseUI/MyButton.vue";

export default {
  name: "PostForm",
  components: { MyButton, MyCheckbox, MyTextarea, MyRadio, MyInput },
  data() {
    return {
      radioButtons: [
        { name: "gender", value: "Мужской", checked: true },
        { name: "gender", value: "Женский" },
      ],

      textareaPlaceholder: "Сообщение",

      checkboxButton: {
        name: "Согласен на обработку персональных данных",
        value: false,
      },

      formValues: {
        name: null,
        email: null,
        gender: "Мужской",
        message: null,
        agree: null,
      },
    };
  },
  methods: {
    sendFormValues() {
      const form = {
        name: this.formValues.name,
        email: this.formValues.email,
        gender: this.formValues.gender,
        message: this.formValues.message,
        agree: this.formValues.agree,
      };
      this.$emit("sendForm", form);
      this.formValues = {
        name: null,
        email: null,
        gender: "Мужской",
        message: null,
        agree: null,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/index.scss";
.form {
  @extend .customForm;

  .formInput {
    margin-bottom: 20px;
  }

  .genderTitle {
    text-align: start;
    margin-bottom: 10px;
  }

  .formRadioContainer {
    display: flex;
    margin-bottom: 20px;

    .formRadio {
      margin-right: 20px;
    }
  }

  .formTextarea {
    margin-bottom: 20px;
  }

  .formCheckbox {
    margin-bottom: 20px;
  }

  .formButton {
    text-align: end;
  }
}
</style>

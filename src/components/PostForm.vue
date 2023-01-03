<template>
  <div class="form">
    <MyInput class="formInput" type="text" placeholder="Имя" />
    <MyInput class="formInput" type="email" placeholder="Email" />
    <p class="genderTitle">Пол</p>
    <div class="formRadioContainer">
      <MyRadio
        :key="radio.value"
        v-for="radio in radioButtons"
        :name="radio.name"
        :value="radio.value"
        :checked="radio.checked"
        class="formRadioButton"
      />
    </div>
    <MyTextarea placeholder="Сообщение" />
  </div>
</template>

<script>
import MyInput from "@/components/MyInput.vue";
import MyRadio from "@/components/MyRadio.vue";
import MyTextarea from "@/components/MyTextarea.vue";

export default {
  name: "PostForm",
  components: { MyTextarea, MyRadio, MyInput },
  data() {
    return {
      radioButtons: [
        { name: "gender", value: "Мужской", checked: "checked" },
        { name: "gender", value: "Женский" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  width: 50%;
  background: white;
  padding: 20px;
  margin-left: 20px;
  border-radius: 5px;

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

    .formRadioButton {
      margin-right: 20px;
    }
  }
}
</style>

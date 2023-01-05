<template>
  <div>
    <ModalWindow v-model:show="modalVisible">
      <h3 class="deletePostText">
        Вы действительно хотите удалить эту новость?
      </h3>
      <div class="deletePostButtonContainer">
        <MyButton @click="dataTransferToParent($emit)" class="deletePostButton"
          >Удаление</MyButton
        >
        <MyButton @click="modalVisible = false">Отмена</MyButton>
      </div>
    </ModalWindow>
    <div class="post" :key="post.id" v-for="post in posts">
      <span class="postId">{{ post.id }}</span>
      <div class="postTextContainer">
        <h3
          @click="post.showDetails = !post.showDetails"
          :class="!post.showDetails ? 'postTitle' : 'postTitleActive'"
        >
          {{ post.title }}
        </h3>
        <h5 class="postAuthorId">id автора {{ post.userId }}</h5>
        <p :class="!post.showDetails ? 'closePostBody' : 'openPostBody'">
          {{ post.body }}
        </p>
      </div>
      <MyButton class="postButton" @click="deleteConfirm(post)"
        >Удалить</MyButton
      >
    </div>
  </div>
</template>

<script>
import MyButton from "@/components/baseUI/MyButton.vue";
import ModalWindow from "@/components/ModalWindow.vue";

export default {
  name: "PostList",
  components: { ModalWindow, MyButton },
  props: {
    posts: {
      type: Array,
    },
  },
  data() {
    return {
      showDetails: false,
      modalVisible: false,
      postNumber: Number,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    async sendPostNumber(post) {
      this.postNumber = post;
    },
    deleteConfirm(post) {
      this.showModal();
      this.sendPostNumber(post);
    },
    dataTransferToParent($emit) {
      $emit("remove", this.postNumber);
      this.modalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  border-bottom: 1px solid var(--gray);
  min-height: 50px;
  margin: 0 30px;
  background: white;
  display: flex;
  align-items: flex-start;

  .postId {
    font-size: 40px;
    text-align: center;
    color: #aeaeaf;
    min-width: 80px;
    height: 55px;
    margin: 5px 15px;
  }

  .postTextContainer {
    display: flex;
    flex-direction: column;
    margin: 10px 30px 10px 0;
    justify-content: center;

    .postTitle {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 5px;
      text-align: start;
      cursor: pointer;
    }

    .postTitleActive {
      @extend .postTitle;
      color: var(--blue);
    }

    .postAuthorId {
      color: #a6a7ab;
      text-align: start;
    }

    .openPostBody {
      text-align: start;
      font-size: 14px;
      margin-top: 20px;
    }

    .closePostBody {
      @extend .openPostBody;
      display: none;
    }
  }
  .postButton {
    margin: 20px 20px 20px auto;
  }
}
.deletePostText {
  margin-bottom: 2rem;
}
.deletePostButtonContainer {
  display: flex;
  justify-content: space-evenly;

  .deletePostButton {
    &:hover {
      background: #ff2424;
      border: 2px solid #ff2424;
    }
  }
}
</style>

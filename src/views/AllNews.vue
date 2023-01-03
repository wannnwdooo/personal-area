<template>
  <div class="allNews">
    <h1 class="allNewsTitle">Все новости</h1>
    <PostList :posts="posts" v-if="!isPostLoading" @remove="removePost" />
    <div v-else>Подождите, идёт загрузка...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import axios from "axios";
export default {
  components: { PostList },
  data() {
    return {
      posts: [],
      isPostLoading: false,
    };
  },
  methods: {
    async fetchPosts() {
      this.isPostLoading = true;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        this.posts = response.data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isPostLoading = false;
      }
    },
    async removePost(post) {
      try {
        const response = await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${post}`
        );
        if (response.status === 200) {
          this.posts = this.posts.filter((p) => p.id !== post.id);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style lang="scss" scoped>
.allNews {
  background: #f3f6ff;
}
.allNewsTitle {
  margin: 20px 0 20px 30px;
  text-align: start;
  font-size: 22px;
}
</style>

<template>
  <div class="allNews">
    <h1 class="allNewsTitle">Все новости</h1>
    <PostList :posts="posts" v-if="!isPostLoading" @remove="removePost" />
    <div v-else>Подождите, идёт загрузка...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import { useFetchPosts } from "@/api/useFetchPosts";
import { useRemovePost } from "@/api/useRemovePost";

export default {
  name: "NewsModule",
  components: { PostList },
  setup() {
    const { isPostLoading, posts } = useFetchPosts();
    const { removePost } = useRemovePost(posts);

    return { isPostLoading, posts, removePost };
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

import axios from "axios";
import { onMounted, ref } from "vue";

export function useFetchPosts() {
  const isPostLoading = ref(true);
  const posts = ref([]);

  const fetching = async () => {
    isPostLoading.value = true;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      posts.value = response.data;
    } catch (e) {
      console.log(e);
    } finally {
      isPostLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    posts,
    isPostLoading,
  };
}

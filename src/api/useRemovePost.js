import axios from "axios";

export function useRemovePost(posts) {
  const removePost = async (post) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post}`
      );
      if (response.status === 200) {
        posts.value = posts.value.filter((p) => p.id !== post.id);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return {
    removePost,
  };
}

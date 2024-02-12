import { randomDate } from "../utils";

import useFetch from "../../hooks/useFetch";
import createPost from "./createPost";

const getPostsExternal = async () => {
  const postsUrl = "https://jsonplaceholder.typicode.com/posts";

  const posts = await useFetch(postsUrl);

  await Promise.all(
    posts.map(async (post) => {
      const postsUrl = `https://jsonplaceholder.typicode.com/users/${post.userId}`;

      const postUserId = await useFetch(postsUrl);

      if (!postUserId) {
        return;
      }

      let curr_date = randomDate(new Date(2010, 0, 1), new Date());
      curr_date = curr_date.toUTCString();

      const postData = {
        id: String(post.id),
        author: postUserId.name,
        title: post.title,
        summary: post.body,
        content: post.body,
        cover: null,
        createdAt: curr_date,
      };

      createPost(postData);
    })
  );
};

const getPosts = () => {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  return posts;
};

const getSinglePost = (postId) => {
  const posts = JSON.parse(localStorage.getItem("posts"));

  const post = posts.find((post) => post.id === postId);
  if (!post) {
    console.log(`No post with ID ${postId} found.`);
    return -1;
  }

  return post;
};

export { getPosts, getPostsExternal, getSinglePost };

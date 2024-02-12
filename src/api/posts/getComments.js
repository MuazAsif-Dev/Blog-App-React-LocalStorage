import { randomDate } from "../utils";

import useFetch from "../../hooks/useFetch";
import createComment from "./createComment";

const getCommentsExternal = async () => {
  const commentsUrl = "https://jsonplaceholder.typicode.com/comments";

  const comments = await useFetch(commentsUrl);

  const finalcomments = await Promise.all(
    comments.map((comment) => {
      let curr_date = randomDate(new Date(2010, 0, 1), new Date());
      curr_date = curr_date.toUTCString();

      const commentData = {
        id: String(comment.id),
        postId: comment.postId,
        username: comment.name,
        body: comment.body,
        createdAt: curr_date,
      };

      createComment(comment.postId, commentData);
    })
  );
};

const getPostComments = (postId) => {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  const postComments = comments.filter((comment) => {
    return String(comment.postId) === String(postId);
  });

  return postComments;
};

export { getCommentsExternal, getPostComments };

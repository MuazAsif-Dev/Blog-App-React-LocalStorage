const deletePost = (postId) => {
  if (!postId) {
    return false;
  }

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (!posts.length > 0) {
    return false;
  }

  const filteredPosts = posts.filter((element) => element.id !== postId);

  if (filteredPosts.length === posts.length) {
    return false;
  }

  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  const filteredComments = comments.filter((comment) => {
    return String(comment.postId) !== String(postId);
  });

  localStorage.setItem("posts", JSON.stringify(filteredPosts));
  localStorage.setItem("comments", JSON.stringify(filteredComments));

  return true;
};

export { deletePost };

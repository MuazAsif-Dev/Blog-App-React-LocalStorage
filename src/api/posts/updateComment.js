const updateComment = (commentId, commentData) => {
  const comments = JSON.parse(localStorage.getItem("comments"));

  const index = comments.findIndex((comment) => comment.id === commentId);
  if (index === -1) {
    console.log(`No comment with ID ${commentId} found.`);
    return false;
  }

  const prevCommentData = comments[index];

  const updatedCommentData = { ...prevCommentData, body: commentData };

  comments[index] = updatedCommentData;

  localStorage.setItem("comments", JSON.stringify(comments));

  return true;
};

export { updateComment };

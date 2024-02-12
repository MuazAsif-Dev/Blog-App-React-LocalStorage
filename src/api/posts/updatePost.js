const updatePost = (postId, postData) => {
  const posts = JSON.parse(localStorage.getItem("posts"));

  const index = posts.findIndex((post) => post.id === postId);
  if (index === -1) {
    console.log(`No post with ID ${postId} found.`);
    return false;
  }

  const prevPostData = posts[index];

  const updatedPostData = { ...prevPostData, ...postData };

  posts[index] = updatedPostData;

  localStorage.setItem("posts", JSON.stringify(posts));

  return true;
};

export { updatePost };

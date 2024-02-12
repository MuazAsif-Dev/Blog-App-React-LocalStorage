import { uniqueID } from "../utils";

const createComment = (postId, data) => {
  if (!data || !postId) {
    return false;
  }

  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  if (!data.id) {
    let id = uniqueID();

    if (comments.length > 0) {
      let matchedId = comments.find((obj) => obj.id === id);

      while (matchedId) {
        id = uniqueID();

        matchedId = comments.find((obj) => obj.id === searchId);
      }
    }

    data["id"] = String(id);
  }

  if (!data.postId) {
    data["postId"] = String(postId);
  }

  let matchedId = comments.find((obj) => obj.id === data.id);

  if (matchedId) {
    return false;
  }

  comments.push(data);
  localStorage.setItem("comments", JSON.stringify(comments));

  return true;
};

export default createComment;

import { uniqueID } from "../utils";

const createPost = (data) => {
  if (!data) {
    return false;
  }

  const posts = JSON.parse(localStorage.getItem("posts")) || [];

  if (!data.id) {
    let id = uniqueID();

    if (posts.length > 0) {
      let matchedId = posts.find((obj) => obj.id === id);

      while (matchedId) {
        id = uniqueID();

        matchedId = posts.find((obj) => obj.id === searchId);
      }
    }

    data["id"] = String(id);
  }

  let matchedId = posts.find((obj) => obj.id === data.id);

  if (matchedId) {
    return false;
  }

  posts.push(data);
  localStorage.setItem("posts", JSON.stringify(posts));

  return true;
};

export default createPost;

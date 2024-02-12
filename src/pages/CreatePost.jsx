import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { createPost } from "../api";
import { PostFormErrorText } from "../assets/Constants";

import PostForm from "../components/PostForm";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [query, setQuery] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const { userInfo } = useContext(UserContext);

  function createNewPost(e) {
    e.preventDefault();

    if (!title) {
      alert(PostFormErrorText.TitleErr);
      return;
    }

    if (!summary) {
      alert(PostFormErrorText.SummaryErr);
      return;
    }

    if (!content) {
      alert(PostFormErrorText.ContentErr);
      return;
    }

    const coverImg =
      images.length > 0
        ? images.find((obj) => obj.id === selectedImageId)
        : null;

    const data = {
      title,
      summary,
      content,
      cover: coverImg?.url,
      author: userInfo.username,
      createdAt: new Date().toUTCString(),
    };

    const posted = createPost(data);

    if (!posted) {
      console.log("Failed to create new post");
      return;
    }

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <PostForm
      postFormType={"Create"}
      handlePostAction={createNewPost}
      postFormInfo={{
        title,
        setTitle,
        summary,
        setSummary,
        content,
        setContent,
        query,
        setQuery,
        images,
        setImages,
        selectedImageId,
        setSelectedImageId,
      }}
    />
  );
};

export default CreatePost;

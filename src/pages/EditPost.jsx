import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

import { getSinglePost } from "../api/posts/getPosts";
import { updatePost } from "../api/posts/updatePost";
import { UserContext } from "../context/UserContext";
import { PostFormErrorText } from "../assets/Constants";

import PostForm from "../components/PostForm";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const { userInfo } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const postInfo = getSinglePost(id);

    if (postInfo.author !== userInfo?.username) {
      setRedirect(true);
    }

    setTitle(postInfo.title);
    setSummary(postInfo.summary);
    setContent(postInfo.content);
  }, []);

  function handleUpdatePost(e) {
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

    const data = {
      title,
      summary,
      content,
    };

    const coverImg =
      images.length > 0
        ? images.find((obj) => obj.id === selectedImageId)
        : null;

    if (coverImg) {
      data["cover"] = coverImg.url;
    }

    const posted = updatePost(id, data);

    if (!posted) {
      console.log("Failed to update post");
      return;
    }

    setRedirect(true);
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }

  return (
    <PostForm
      postFormType={"Edit"}
      handlePostAction={handleUpdatePost}
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

export default EditPost;

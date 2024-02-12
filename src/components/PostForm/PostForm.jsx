import { PostFormActionText } from "../../assets/Constants";

import useUnsplash from "../../hooks/useUnsplash";
import Editor from "../Editor/Editor";

import "./PostForm.css";

const PostForm = ({ postFormType, handlePostAction, postFormInfo }) => {
  const { title, setTitle } = postFormInfo;
  const { summary, setSummary } = postFormInfo;
  const { query, setQuery } = postFormInfo;
  const { content, setContent } = postFormInfo;
  const { images, setImages } = postFormInfo;
  const { selectedImageId, setSelectedImageId } = postFormInfo;

  function handleQuery() {
    setSelectedImageId(null);
    useUnsplash(query, setImages);
  }

  const handleImgClick = (id) => {
    setSelectedImageId(id);
  };

  return (
    <>
      <div>
        {postFormType} {PostFormActionText.Title}
      </div>
      <br />
      <form className="post-form" onSubmit={handlePostAction}>
        <input
          className="post-form-input"
          type="title"
          placeholder={"Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="post-form-input"
          type="summary"
          placeholder={"Summary"}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />
        <input
          className="post-form-input"
          type="text"
          placeholder={"Search..."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {images.length > 0 && (
          <div className="post-form-images">
            {images.map((imgObj) => {
              const isSelected = imgObj.id === selectedImageId;
              return (
                <img
                  src={imgObj.url}
                  key={imgObj.id}
                  className={`post-form-img ${isSelected ? "img-active" : ""}`}
                  onClick={() => handleImgClick(imgObj.id)}
                />
              );
            })}
          </div>
        )}
        <button className="post-form-btn" type="button" onClick={handleQuery}>
          {PostFormActionText.QueryBtn}
        </button>
        <Editor value={content} onChange={setContent} />
        <button className="post-form-btn">
          {postFormType} {PostFormActionText.SubmitBtn}
        </button>
      </form>
    </>
  );
};

export default PostForm;

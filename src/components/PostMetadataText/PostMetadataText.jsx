import "./PostMetadataText.css";

const PostMetadataText = ({ title, createdAt, author }) => {
  return (
    <>
      <h1 className="post-metadata-title">{title}</h1>
      <time className="post-metadata-time">{createdAt}</time>
      <div className="post-metadata-author">By @{author}</div>
    </>
  );
};

export default PostMetadataText;

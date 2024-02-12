import "./PostCoverImg.css";

const PostCoverImg = ({ coverImg }) => {
  return (
    <div className="post-cover-img-container">
      <img className="post-cover-img" src={coverImg} alt="" />
    </div>
  );
};

export default PostCoverImg;

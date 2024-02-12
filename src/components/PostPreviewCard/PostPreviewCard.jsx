import { Link } from "react-router-dom";

import { DefaultCoverImg } from "../../assets/Constants";

import "./PostPreviewCard.css";

const PostPreviewCard = ({ id, title, summary, cover, createdAt, author }) => {
  return (
    <div className="post">
      <div className="post-image-container">
        <Link to={`/post/${id}`}>
          <img
            className="post-image"
            src={cover ? cover : DefaultCoverImg}
            alt=""
          />
        </Link>
      </div>
      <div className="post-text">
        <Link to={`/post/${id}`}>
          <h2 className="post-header">
            {title.length > 40 ? `${title.substring(0, 40)}...` : title}
          </h2>
        </Link>
        <p className="post-info">
          <a href="" className="post-author">
            {author}
          </a>
          <time>{createdAt.substring(0, 25)}</time>
        </p>
        <p className="post-paragraph">
          {summary.length > 100 ? summary.substring(0, 100) : summary}
        </p>
      </div>
    </div>
  );
};

export default PostPreviewCard;

import { useEffect, useState } from "react";

import { updateComment } from "../../api/posts/updateComment";

import "./PostComment.css";
import { CommentActionText } from "../../assets/Constants";

const PostComment = ({
  username,
  createdAt,
  body,
  editIcon,
  id,
  currentUser,
}) => {
  const [commentContent, setCommentContent] = useState(body);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setCommentContent(body);
  }, []);

  const handleCommentEditClick = () => {
    setEditMode(true);
  };

  const handleCommentEdit = () => {
    updateComment(id, commentContent);
    setEditMode(false);
  };

  return (
    <div className="comment">
      <h1 className="comment-author">{username}</h1>
      <time className="comment-time">{createdAt}</time>
      {editMode ? (
        <input
          className="comment-body"
          type="text"
          autoFocus
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
      ) : (
        <p className="comment-body">{commentContent}</p>
      )}
      {currentUser === username &&
        (editMode ? (
          <>
            <span className="comment-actions" onClick={handleCommentEdit}>
              {CommentActionText.Save}
            </span>
            <span
              className="comment-actions"
              onClick={() => {
                setEditMode(false);
              }}
            >
              {CommentActionText.Cancel}
            </span>
          </>
        ) : (
          <span onClick={handleCommentEditClick}>{editIcon}</span>
        ))}
    </div>
  );
};

export default PostComment;

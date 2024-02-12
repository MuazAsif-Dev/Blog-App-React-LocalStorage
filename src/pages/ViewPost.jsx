import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { getSinglePost } from "../api/posts/getPosts";
import {
  CommentActionText,
  DeleteIconSVG,
  EditIconSVG,
} from "../assets/Constants";
import { getCommentsExternal, getPostComments } from "../api/posts/getComments";
import { sortArrByDate } from "../utils";
import { deletePost } from "../api/posts/deletePost";

import PostCoverImg from "../components/PostCoverImg";
import PostMetaDataText from "../components/PostMetadataText";
import PostComment from "../components/PostComment";
import createComment from "../api/posts/createComment";
import PostActionButton from "../components/PostActionButton";

const ViewPost = () => {
  const { id } = useParams();

  const { userInfo } = useContext(UserContext);

  const [redirect, setRedirect] = useState(false);
  const [postInfo, setPostInfo] = useState(null);
  const [commentInfo, setCommentInfo] = useState(null);
  const [newCommentBody, setNewCommentBody] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const posts = getSinglePost(id);
    posts === -1 ? setRedirect(true) : setPostInfo(posts);
  }, []);

  useEffect(() => {
    getCommentsExternal().then(() => {
      const allComments = getPostComments(postInfo?.id);

      if (allComments.length > 0) {
        sortArrByDate(allComments, setCommentInfo);
      }
    });
  }, [postInfo]);

  const handlePostDelete = () => {
    deletePost(id);
    setRedirect(true);
  };

  const handlePostEdit = () => {
    navigate(`/edit/${postInfo.id}`);
  };

  const handleNewComment = () => {
    let curr_date = new Date();
    curr_date = curr_date.toUTCString();

    const newCommentObj = {
      body: newCommentBody,
      username: userInfo.username,
      createdAt: curr_date,
    };

    const commentSuccess = createComment(postInfo.id, newCommentObj);

    if (!commentSuccess) {
      alert("Comment not posted");

      return;
    }

    setPostInfo(getSinglePost(id));
    setNewCommentBody("");
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  if (!postInfo) return "";

  return (
    <div className="full-post-container">
      <PostCoverImg coverImg={postInfo.cover} />

      <PostMetaDataText
        title={postInfo.title}
        author={postInfo.author}
        createdAt={postInfo.createdAt}
      />

      {userInfo.username === postInfo.author && (
        <div className="full-post-actions">
          <PostActionButton
            actionType={"edit-action"}
            handleAction={handlePostEdit}
            actionText={"Edit this post"}
            buttonIcon={EditIconSVG}
          />
          <PostActionButton
            actionType={"delete-action"}
            handleAction={handlePostDelete}
            actionText={"Delete Post"}
            buttonIcon={DeleteIconSVG}
          />
        </div>
      )}
      <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />

      <br />
      <br />
      <div className="full-post-comments-container">
        <h2>
          {CommentActionText.Title} ({commentInfo ? commentInfo.length : "0"})
        </h2>

        <div className="full-post-comments-new">
          <input
            type="text"
            autoFocus
            value={newCommentBody}
            onChange={(e) => setNewCommentBody(e.target.value)}
            placeholder="type..."
          />
          <button type="button" onClick={handleNewComment}>
            {CommentActionText.Submit}
          </button>
        </div>

        {commentInfo?.length > 0 &&
          commentInfo.map((comment) => {
            return (
              <PostComment
                key={comment.id}
                id={comment.id}
                currentUser={userInfo.username}
                {...comment}
                editIcon={EditIconSVG}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ViewPost;

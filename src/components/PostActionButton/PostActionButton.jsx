import "./PostActionButton.css";

const PostActionButton = ({
  actionType,
  handleAction,
  actionText,
  buttonIcon,
}) => {
  return (
    <div className="post-action" onClick={handleAction}>
      <span className={`post-action-btn ${actionType}`}>
        {buttonIcon} {actionText}
      </span>
    </div>
  );
};

export default PostActionButton;

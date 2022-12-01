/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import "./style.scss";
import { FaRegComment } from "@react-icons/all-files/fa/FaRegComment";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "store/post/postSlice";
import { Link } from "react-router-dom";

const Card = ({
  users,
  userId,
  index,
  title,
  id,
  body,
  getComment,
  getUserInfo,
  postComments,
  postIds
}) => {
  const findAuthor = () => {
    const author = users.find((user) => user.id === userId);
    return (
      <>
        <span>{author?.name}</span>
        <span>@{author?.username}</span>
      </>
    );
  };

  const findComment = () => {
    const comments = postComments.find((post) => post[0].postId === id);
    return (
      <div className="card__comments" key={id}>
        {comments?.map((comment) => (
          <div className="card__comment">
            <div className="card__comment-user">
              <span>{comment.name}</span>
              <span>{comment.email}</span>
            </div>
            <span>{comment.body}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="card__wrapper">
      <div className="card__post-info">
        <Link
          to={`/user/${userId}`}
          style={{ textDecoration: "none", color: "#E7E9EA" }}
        >
          <div
            className="card__author-info"
            onClick={() => getUserInfo(userId)}
          >
            {findAuthor()}
          </div>
        </Link>
        <div onClick={() => getComment(id, index)}>
          <h1>{title}</h1>
          <span>{body}</span>
        </div>
        <div className="card__icon">
          <div className="card__details" onClick={() => getComment(id, index)}>
            <FaRegComment style={{ color: "#E7E9EA" }} />
            <span>comments</span>
          </div>
        </div>
      </div>
      {postIds.includes(id) ? <>{findComment()}</> : null}
    </div>
  );
};

Card.propTypes = {
  userId: PropTypes.number,
  title: PropTypes.string,
  id: PropTypes.number
};

Card.defaultProps = {
  title: "",
  userId: 0,
  id: 0
};

export default Card;

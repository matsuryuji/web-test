/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import "./style.scss";
import { FaRegComment } from "@react-icons/all-files/fa/FaRegComment";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "store/post/postSlice";
import { Link } from "react-router-dom";

const Card = ({ users, userId, title, id, getComment, postComments }) => {
  const findAuthor = () => {
    const author = users.find((user) => user.id === userId);
    return (
      <>
        <span>{author?.name}</span>
        <span>@{author?.username}</span>
      </>
    );
  };

  return (
    <div className="card__wrapper">
      <Link
        to={`/user/${userId}`}
        style={{ textDecoration: "none", color: "#E7E9EA" }}
      >
        <div className="card__author-info">{findAuthor()}</div>
      </Link>
      <div onClick={() => getComment(id)}>
        <h1>{title}</h1>
      </div>
      <div className="card__icon">
        <div className="card__details">
          <FaRegComment style={{ color: "#E7E9EA" }} />
          <span>comments</span>
        </div>
      </div>
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

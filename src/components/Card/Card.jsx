import PropTypes from "prop-types";
import "./style.scss";
import { FaRegHeart } from "@react-icons/all-files/fa/FaRegHeart";
import { FaRegComment } from "@react-icons/all-files/fa/FaRegComment";

const Card = ({ users, userId, title }) => {
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
      <div className="card__author-info">{findAuthor()}</div>
      <h1>{title}</h1>
      <div className="card__icon">
        <div className="card__details">
          <FaRegHeart style={{ color: "#E7E9EA" }} />
          <span>reactions</span>
        </div>
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
  title: PropTypes.string
};

Card.defaultProps = {
  title: "",
  userId: 0
};

export default Card;

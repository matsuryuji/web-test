import PropTypes from "prop-types";

const Card = ({ id, title }) => {
  const teste = 0;

  return (
    <div className="card__wrapper">
      <h1 key={id}>{title}</h1>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string
};

Card.defaultProps = {
  title: "",
  id: ""
};

export default Card;

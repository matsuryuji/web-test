import './style.scss';
import PropTypes from 'prop-types';

function Button({children, className, type, ...props}) {
  return <button className={className} type={type} {...props}>
      {children}
    </button>
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  children: '',
  type: 'button',
};
export default Button;

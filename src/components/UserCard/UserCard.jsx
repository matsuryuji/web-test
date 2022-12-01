import "./style.scss";

const UserCard = ({ user }) => (
  <div className="user-card__wrapper">
    <div className="user-card__user-detail">
      <span>{user.name}</span>
      <span>@{user.username}</span>
      <span>{user.email}</span>
      <span>{user.phone}</span>
    </div>
    <div className="user-card__work-info">
      <div className="user-card__info">
        <span>Website: </span>
        <a href={user.website}>{user.website}</a>
      </div>
      <div className="user-card__info">
        <span>Company: </span>
        <span>{user.company.name}</span>
      </div>
    </div>
  </div>
);

export default UserCard;

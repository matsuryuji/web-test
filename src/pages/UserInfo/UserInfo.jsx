import UserCard from "components/UserCard";
import { useSelector } from "react-redux";
import "./style.scss";

const UserInfo = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="user-info__wrapper">
      <div className="user-info__card">
        <UserCard user={user} key={user.id} />
      </div>
    </div>
  );
};

export default UserInfo;

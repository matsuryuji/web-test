import Card from "components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "store/posts/postsSlice";
import { getUsers, selectAllUsers } from "store/user/userSlice";
import "./style.scss";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector(selectAllUsers);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="home__wrapper">
      <div className="home__cards">
        {posts && users ? (
          <>
            {posts.map((post) => (
              <Card
                key={post.id}
                users={users}
                userId={post.userId}
                title={post.title}
                body={post.body}
              />
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Home;

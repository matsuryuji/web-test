import Card from "components/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "store/posts/postsSlice";
import { getUsers } from "store/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const postsStore = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      {postsStore ? (
        <>
          {postsStore.map((post) => (
            <Card id={post.id} title={post.title} />
          ))}
        </>
      ) : null}
    </div>
  );
};

export default Home;

import Card from "components/Card";
import { Button } from "components/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "store/post/postSlice";
import { getPosts } from "store/posts/postsSlice";
import { getUsers, selectAllUsers } from "store/user/userSlice";
import "./style.scss";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const users = useSelector(selectAllUsers);
  const postComments = useSelector((state) => state.post.postComments);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const [postId, setPostId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);

  const showMorePosts = () => {
    if (visiblePosts < posts.length)
      setVisiblePosts((prevValue) => prevValue + 10);
    else setVisiblePosts(10);
  };

  const getComment = (idPost) => {
    setPostId(idPost);
    dispatch(getPost(idPost));
  };

  return (
    <div className="home__wrapper">
      <div className="home__cards">
        {posts && users ? (
          <>
            {posts.slice(0, visiblePosts).map((post) => (
              <Card
                key={post.id}
                id={post.id}
                users={users}
                userId={post.userId}
                title={post.title}
                body={post.body}
                getComment={getComment}
                postComments={postComments}
              />
            ))}
          </>
        ) : null}
        <Button
          style={{ width: "320px", height: "60px" }}
          onClick={showMorePosts}
        >
          {visiblePosts < posts.length ? "Show More" : "Show Less"}
        </Button>
      </div>
    </div>
  );
};

export default Home;

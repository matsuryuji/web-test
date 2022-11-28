import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "store/posts/postsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const postsStore = useSelector(state => state.posts.posts)

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      {postsStore.map((post)=> <h1 key={post.id}>{post.title}</h1>)}
    </div>
  )
}


export default Home;
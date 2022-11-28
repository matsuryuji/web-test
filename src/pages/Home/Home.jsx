import { useState } from "react";

const Home = () => {
  const [posts] = useState("sasas");

  return (
    <div>
      {posts}
    </div>
  )
}


export default Home;
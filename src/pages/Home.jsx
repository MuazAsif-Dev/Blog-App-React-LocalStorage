import { useContext, useEffect, useState } from "react";

import { getPosts, getPostsExternal } from "../api/posts/getPosts";
import { UserContext } from "../context/UserContext";
import { sortArrByDate } from "../utils";
import { HomeGreetingText } from "../assets/Constants";

import PostPreviewCard from "../components/PostPreviewCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    getPostsExternal().then(() => {
      const allPosts = getPosts();
      if (allPosts.length > 0) {
        sortArrByDate(allPosts, setPosts);
      }
    });
  }, []);

  return (
    <>
      <h1>
        {HomeGreetingText}{" "}
        <span className="home-user-span">{userInfo.username}</span>
      </h1>

      <div className="post-container">
        {posts.length > 0 &&
          posts.map((post) => <PostPreviewCard key={post.id} {...post} />)}
      </div>
    </>
  );
};

export default Home;

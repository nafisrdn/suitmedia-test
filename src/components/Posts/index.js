import axios from "axios";
import { useEffect, useState } from "react";
import Header, { SORT_BY_NEWEST } from "./Header";
import PostList from "./PostList";

const apiUrl = "https://suitmedia-backend.suitdev.com/api/ideas";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [sortBy, setSortBy] = useState(SORT_BY_NEWEST);

  const getPosts = async () => {
    const res = await axios.get(
      `${apiUrl}?page[number]=${currentPage}&page[size]=${postPerPage}&append[]=small_image&append[]=medium_image&sort=${
        sortBy === SORT_BY_NEWEST ? "" : "-"
      }published_at
          `
    );

    setPosts(res.data.data);
  };

  useEffect(() => {
    console.log(posts);
  }, [posts])

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section>
      <Header />
      <PostList posts={posts}/>
    </section> 
  );
};

export default Posts;

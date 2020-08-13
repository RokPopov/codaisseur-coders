// src/components/PostsFeed.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { getPosts } from "../store/feed/selectors";
import { fetchNext5Posts } from "../store/feed/actions";

export default function PostsFeed() {
  // const [data, setData] = useState({
  //   loading: true,
  //   posts: [],
  // });

  const dispatch = useDispatch();
  const data = useSelector(getPosts);
  console.log("what is our reduxData", data);

  // async function fetchNext5Posts() {
  //   // setData({ ...data, loading: true });
  //   const API_URL = `https://codaisseur-coders-network.herokuapp.com`;
  //   const response = await Axios.get(
  //     `${API_URL}/posts?offset=${data.posts.length}&limit=5`
  //   );
  //   console.log("my response:", response.data.rows);
  //   const morePosts = response.data.rows;
  //   dispatch({
  //     type: "SHOW_MORE_POSTS",
  //     payload: morePosts,
  //   });

  //   // setData({
  //   //   loading: false,
  //   //   posts: [...data.posts, ...morePosts],
  //   // });
  // }

  useEffect(() => {
    dispatch(fetchNext5Posts);
  }, [dispatch]);
  console.log("what is data", data.posts);

  return (
    <div className="PostsFeed">
      <h2>Recent posts</h2>

      {data.posts.map((post, i) => {
        console.log("what is a post", post);
        return (
          <ul key={i}>
            <li>
              <strong>{post.title}</strong>
            </li>
            <li>
              <ul>
                {post.tags.map((tag, i) => {
                  console.log("what is tag:", tag);
                  return <li key={i}>{tag.tag}</li>;
                })}
              </ul>
            </li>
            <li>{moment(post.createdAt).format("DD-MM-YYYY")}</li>
          </ul>
        );
      })}
      {data.loading ? (
        "Loading..."
      ) : (
        <button onClick={() => dispatch(fetchNext5Posts)}>
          load 5 more posts
        </button>
      )}
    </div>
  );
}

import Axios from "axios";

// export function fPosts(morePosts) {
//   return {
//     type: "SHOW_MORE_POSTS",
//     payload: morePosts,
//   };
// }

export async function fetchNext5Posts(dispatch, getState) {
  // setData({ ...data, loading: true });
  const API_URL = `https://codaisseur-coders-network.herokuapp.com`;
  const offset = getState().feed.posts.length;
  const response = await Axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);
  console.log("my response:", response);
  const morePosts = response.data.rows;
  dispatch({
    type: "SHOW_MORE_POSTS",
    payload: morePosts,
  });
}

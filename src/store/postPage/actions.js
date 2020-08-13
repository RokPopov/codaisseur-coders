// src/store/postPage/actions.js
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;
export const FETCH_POSTS = "FETCH_POSTS";
// export function startLoadingPost() {
//   // TODO
// }

export function postFullyFetched(postData) {
  console.log("LOL", postData);
  return {
    type: FETCH_POSTS,
    payload: postData,
  };
}

export function fetchPost(id) {
  console.log("do you work");
  return async function thunk(dispatch, getState) {
    // dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`),
      axios.get(`${API_URL}/posts/${id}/comments`),
    ]);
    console.log("what is that:", postResponse.data);
    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );
  };
}

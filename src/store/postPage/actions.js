// src/store/postPage/actions.js
import axios from "axios";
import { API_URL } from "../../config";

export const FETCH_POSTS = "FETCH_POSTS";
export const START_LOADING = "START_LOADING";

export function startLoadingPost() {
  return {
    type: START_LOADING,
  };
}

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
    dispatch(startLoadingPost());

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

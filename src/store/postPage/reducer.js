import { FETCH_POSTS } from "./actions";
import { START_LOADING } from "./actions";
const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return {
        loading: false,
        post: payload.post,
        comments: payload.comments,
      };

    case START_LOADING:
      return initialState;

    default:
      return state;
  }
};

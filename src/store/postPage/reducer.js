import { FETCH_POSTS } from "./actions";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

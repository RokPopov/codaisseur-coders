const initialState = {
  loading: true,
  posts: [],
};

export default (state = initialState, { type, payload }) => {
  console.log("what is payload", payload);
  switch (type) {
    case "SHOW_MORE_POSTS":
      console.log("what is payload", payload);
      return { ...state, loading: false, posts: [...state.posts, ...payload] };

    default:
      return state;
  }
};

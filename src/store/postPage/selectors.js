// export const selectPostTitle = (state) => state.postPage.post.title;

// export const selectPost = (state) => state.postPage.post;

export function selectPost(reduxState) {
  return reduxState.postPage.loading
    ? null
    : {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      };
}

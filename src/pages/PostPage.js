import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../store/postPage/actions";
import { selectPost } from "../store/postPage/selectors";
import moment from "moment";

export default function PostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // const postTitle = useSelector(selectPostTitle);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch]);

  const post = useSelector(selectPost);

  console.log("HEY", post);

  return (
    <div>
      <h1>hello</h1>
      <strong>
        {!post ? (
          "loading"
        ) : (
          <div>
            <h1>{post.title}</h1>
            <h3>{post.content}</h3>
            <h2>Comments</h2>

            {post.post.tags.map((tag) => {
              return <p key={tag.id}>{tag.tag}</p>;
            })}

            {post.comments.rows.length === 0 ? (
              <p>
                <em>No comments left behind yet :(</em>
              </p>
            ) : (
              post.comments.rows.map((comment) => {
                return (
                  <div key={comment.id}>
                    <p>{comment.text}</p>
                    <p className="meta">
                      By <strong>{comment.developer.name}</strong> &bull;{" "}
                      {moment(comment.createdAt).format("DD-MM-YYYY")}{" "}
                    </p>
                  </div>
                );
              })
            )}
          </div>
        )}
      </strong>
    </div>
  );
}

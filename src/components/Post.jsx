import React from 'react';
import Button from "./UI/button/Button";

const Post = ({post, number, remove}) => {
  return (
    <div className="post">
      <div className="post__content">
        <span>{number}</span>
        <strong>{post.title}</strong>
        <div>{post.description}</div>
      </div>
      <div className="post_btns">
        <Button onClick={() => remove(post.id)}>Del</Button>
      </div>
    </div>
  );
};

export default Post;

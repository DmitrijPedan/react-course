import React, {useEffect} from 'react';
import Button from "./UI/button/Button";
import {useHistory} from 'react-router-dom';

const Post = ({post, number, remove}) => {

  const router = useHistory()

  return (
    <div className="post">
      <div className="post__content">
        <span>{post.id}</span>
        <strong>{post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post_btns">
        <Button onClick={() => router.push(`/posts/${post.id}`)}>Open</Button>
        <Button onClick={() => remove(post.id)}>Del</Button>
      </div>
    </div>
  );
};

export default Post;

import React from 'react';
import Post from "./Post";

const PostList = ({title, posts, remove }) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{posts.length ? title : 'Post not found'}</h1>
      {posts.map((post, i) => <Post remove={remove} number={i + 1} post={post} key={post.id}></Post>)}
    </div>
  );
};

export default PostList;

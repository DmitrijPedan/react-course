import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({title, posts, remove }) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>{posts.length ? title : 'Post not found'}</h1>
      <TransitionGroup>
        {posts.map((post, i) => {
          return <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <Post remove={remove} number={i + 1} post={post}/>
          </CSSTransition>
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;

import React from 'react';
import classes from './PostComments.module.css'

const PostComments = ({comments}) => {
  return (
    <div className={classes.comments}>
      <h4 className={classes.head}>Post comments:</h4>
      {comments.map(c => (
        <div key={c.id} className={classes.comment}>
          <h5 className={classes.title}>{c.name}</h5>
          <p className={classes.body}>{c.body}</p>
          <p className={classes.author}>{c.email}</p>
        </div>
      ))}
    </div>
  );
};

export default PostComments;

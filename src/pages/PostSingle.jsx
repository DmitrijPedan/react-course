import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import PostService from "../api/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/UI/loader/Loader";
import PostComments from "../components/UI/post-comments/PostComments";

const PostSingle = () => {

  const params = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchingPost, loading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id);
    setPost(response.data);
  })
  const [fetchingComments, commentsLoading, CommentsError] = useFetching(async () => {
    const response = await PostService.getComments(params.id);
    setComments(response.data);
  })


  useEffect(() => {
    fetchingPost()
    fetchingComments()
  }, [])


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Single post page</h1>
      {loading
        ? <Loader/>
        : <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
        }
      {commentsLoading
        ? <Loader/>
        : <PostComments comments={comments}/>
      }
    </div>
  )

};

export default PostSingle;

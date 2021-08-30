import React, {useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import Button from "./UI/button/Button";

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', description: ''});
  const descriptionInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    create({id: Date.now(), ...post})
    setPost({title: '', description: ''});
  }


  return (
    <form className="form">
      {/*Управляемый*/}
      <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text"
        placeholder="Post name"
      />
      <MyInput
        value={post.description}
        onChange={e => setPost({...post, description: e.target.value})}
        type="text"
        placeholder="Post description"
      />
      {/*Неуправляемый компонент (через реф)*/}
      {/*<MyInput*/}
      {/*  ref={descriptionInputRef}*/}
      {/*  type="text"*/}
      {/*  placeholder="Post description"*/}
      {/*></MyInput>*/}
      <Button
        onClick={addNewPost}
        disabled={post.title.length < 1 || post.description.length < 1}
      >Add post</Button>
    </form>
  );
};

export default PostForm;

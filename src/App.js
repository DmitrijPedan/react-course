import React, {useState, useMemo} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', description: 'Frontend Programming language'},
    {id: 2, title: 'PHP', description: 'Most Popular Backend Programming language'},
    {id: 3, title: 'Ruby', description: 'Backend Programming language'},
    {id: 4, title: 'Java', description: 'Full Backend Programming language'},
    {id: 5, title: 'Python', description: 'New Backend Programming language'},
  ])
  const [filter, setFilter] = useState({sort: '', search: ''});
  const [visible, setVisible] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    } else {
      return posts;
    }
  }, [posts, filter.sort]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.search));
  }, [sortedPosts, filter.search])

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  }

  const options = [
    {name: 'By name', value: 'title'},
    {name: 'By description', value: 'description'},
  ]

  return (
    <div className="App">
      <Button onClick={() => setVisible(true)}>Add new post</Button>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        options={options}
      />
      <PostList
        remove={deletePost}
        posts={sortedAndSearchedPosts}
        title="Posts list"
      >Posts List</PostList>
      <Modal
        visible={visible}
        setVisible={setVisible}
      >
        <PostForm
          create={addNewPost}
        />
      </Modal>
    </div>
  );
}

export default App;

import React, {useState, useEffect} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import {usePosts} from "./hooks/usePosts";
import PostService from "./api/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPagesCount} from "./utils/pages";

function App() {

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({sort: '', search: ''});
  const [visible, setVisible] = useState(false);
  const [fetchPosts, loading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
    console.log(totalPages)
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {
    fetchPosts()
  }, [])

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost]);
    setVisible(false);
  }

  const deletePost = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  }

  return (
    <div className="App">
      <Button onClick={() => setVisible(true)}>Add new post</Button>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {loading
        ? <Loader />
        :  <PostList
          remove={deletePost}
          posts={sortedAndSearchedPosts}
          title="Posts list"
        >Posts List</PostList>
      }
      {error && <h2>Error {error}</h2>}
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

};

export default App;

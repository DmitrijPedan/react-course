import React, {useState, useEffect, useRef} from "react";
import '../styles/App.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import Button from "../components/UI/button/Button";
import {usePosts} from "../hooks/usePosts";
import PostService from "../api/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";

function Posts() {

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState({sort: '', search: ''});
  const [visible, setVisible] = useState(false);
  const [autoload, setAutoload] = useState(false);
  const lastElement = useRef();

  const [fetchPosts, loading, error] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);

  useObserver(lastElement, autoload, page < totalPages, loading, () => setPage(page + 1));

  useEffect(() => {
    fetchPosts()
  }, [page]);

  const enableAutoload = () => {
    setAutoload(true);
    setPage(page + 1);
  }


  const changePage = (p) => {
    setPage(p);
  }

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
      {loading && <Loader />}
      <PostList
        remove={deletePost}
        posts={sortedAndSearchedPosts}
        title="Posts list"
      >Posts List</PostList>
      <div ref={lastElement}></div>
      {error && <h2>Error {error}</h2>}
      {!autoload &&
        <div>
          <Pagination
            current={page}
            total={totalPages}
            changePage={changePage}
          />
          <Button onClick={enableAutoload}>Autoload</Button>
        </div>
      }
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

export default Posts;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './home.css';
import { Post, NoPost } from '../post/post';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    renderPost();
  }, []);

  const createPost = (event) => {
    event.preventDefault();
    const postTitle = document.querySelector("#title");
    const postText = document.querySelector("#text");

    axios
      .post(`/api/v1/post`, {
        title: postTitle.value,
        text: postText.value,
      })
      .then(function (response) {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Post Added',
          timer: 1000,
          showConfirmButton: false,
        });
        renderPost();
      })
      .catch(function (error) {
        console.log(error);
        document.querySelector(".result").innerHTML = "Error in post submission";
      });

    postTitle.value = "";
    postText.value = "";
  };

  const renderPost = () => {
    axios
      .get(`/api/v1/posts`)
      .then(function (response) {
        let fetchedPosts = response.data;
        console.log("fetched posts", fetchedPosts);
        setPosts(fetchedPosts);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="space-around row">
        <h1 className="bi bi-activity green"> Mongo DB</h1>
      </div>

      <form onSubmit={createPost}>
        <h2>Create New Post</h2>
        <label htmlFor="title" className="green">
          Title
        </label>
        <input required id="title" type="text" placeholder="Enter Title" className="input" />
        <label htmlFor="text" className="green">
          Text
        </label>
        <textarea required id="text" placeholder="Enter Text" className="input"></textarea>
        <button type="submit" className="button">
          Post
        </button>
      </form>
      <h2 className="green">Posts</h2>
      <div className="result">
        {posts.length === 0 ? (
          <NoPost />
        ) : (
          posts.map((post, index) => (
            <Post key={post._id} title={post.title} text={post.text} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const CreatePost = (props) => {
  const [currentUser, setCurrentUser] = useState("");
  const [posts, setPosts] = useState("");

  const users = axios.get(
    `${REACT_APP_SERVER_URL}/api/users/posts/${props.user.id}`
  );
  useEffect(() => {
    users.then((res) => {
      setCurrentUser(res.data);
    });
  }, []);

  const handleCreatePost = (e) => {
    setPosts(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const updatePost = {
      posts
    };

    axios
      .put(`${REACT_APP_SERVER_URL}/api/users/posts/${props.user.id}`, updatePost)
      .then((res) => {
        console.log(res, "creating post....");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="update-post-container">
      <h2>Posts</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What's happening right now?"
          onChange={handleCreatePost}
        />
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;

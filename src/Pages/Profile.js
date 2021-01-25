import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/ProfileSection";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Profile = (props) => {
  console.log(props);
  const { handleLogout } = props;
  const { exp, id, name, email } = props.user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  console.log(String(expirationTime));

  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login again.");
  }

  const handleRemove = (e) => {
    e.preventDefault();
    console.log(props.user);
    const id = props.user.id;
    console.log(id, "<<---this is the user id");
    console.log(`${REACT_APP_SERVER_URL}/api/users/${id}`);
    axios.delete(`${REACT_APP_SERVER_URL}/api/users/${id}`).then((response) => {
      console.log(response);
      console.log(response.data);
    });
  };

  const userData = props.user ? (
    <div>
      <h1>Profile</h1>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>ID:</strong> {id}
      </p>
      <aside>
        <button onClick={handleRemove}>Delete Your Account</button>
        <button>Favorite</button>
      </aside>
    </div>
  ) : (
    <h4>Loading...</h4>
  );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  const [username, setUsername] = useState("New User");
  const [picture, setPicture] = useState("https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg");
  const [location, setLocation] = useState("Location");
  const [bio, setBio] = useState("My bio");
  const [followers, setFollowers] = useState(0);
  const [follows, setFollows] = useState(0);


  return (
    <>
      <Navbar />
      <div className="container content-container">
        {/* { props.user ? userData : errorDiv() } */}
        <div className="row">
          <div class="col-4">
            <h2>Profile</h2>
            <img className="profile-img" src={picture} alt="angelb" />
            <h4>{props.user.username}</h4>
            <p>{location}</p>
            <p>{props.user.bio}</p>
            <button>Follow</button>
            <p>{props.user.follows} Followers</p>
            <p>{follows} Following</p>

            <h5>Top Friends</h5>
          </div>
          <div class="col-8 profile-posts">
            <h2>My Posts</h2>
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

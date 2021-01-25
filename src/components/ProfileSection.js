import React, { useState } from "react";
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ProfileSection = (props) => {



  const [username, setUsername] = useState('Angel B')
  const [picture, setPicture] = useState('https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg')
  const [location, setLocation] = useState('Fresno,CA')
  const [bio, setBio] = useState('I’m a web developer who partially has an idea of what he is doing')
  const [followers, setFollowers] = useState(79)
  const [follows, setFollows] = useState(112)


  return (
    <div>
      <h2>Profile</h2>
      <img
        className="profile-img"
        src={picture}
        alt="angelb"
      />
      <h4>{username}</h4>
      <p>{location}</p>
      <p></p>
      <button>Follow</button>
      <p>{followers} Followers</p>
      <p>{follows} Following</p>

      <h5>Top Friends</h5>
    </div>
  );
};

export default ProfileSection;

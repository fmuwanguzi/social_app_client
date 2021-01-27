import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ProfileSection = (props) => {
  // console.log(props.user.name);
  const { handleLogout } = props;
  const { exp, id  } = props.user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  // console.log(String(expirationTime));

  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login again.");
  }



  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  
  const [followers, setFollowers] = useState('coming soon');
  const [follows, setFollows] = useState(0);
  

  return (
    <>
    <div className="container content-container profile-content">
        {/* { props.user ? userData : errorDiv() } */}
        <div className="row">
          <div className="col" >
            <img className="profile-img" src={props.user.picture} alt="angelb" />
            <h4>{props.user.name}</h4>
            <p>{props.user.location}</p>
            <p>{props.user.bio}</p>
            <div className='followers-section'>
              <p>{followers} Followers:</p>
              <p>{props.user.follows} Follows</p>
            </div>
          </div>
        </div>
      </div>
      </>
  );
};

export default ProfileSection;

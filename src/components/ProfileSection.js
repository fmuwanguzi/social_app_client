import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ProfileSection = (props) => {
  // console.log(props.user.name);
  const { handleLogout } = props;
  const { exp, id } = props.user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();
  // console.log(String(expirationTime));

  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login again.");
  }

  const handleRemove = (e) => {
    e.preventDefault();
    // console.log(props.user);
    const id = props.user.id;
    // console.log(id, "<<---this is the user id");
    // console.log(`${REACT_APP_SERVER_URL}/api/users/${id}`);
    axios.delete(`${REACT_APP_SERVER_URL}/api/users/${id}`).then((response) => {
      // console.log(response);
      // console.log(response.data);
    });
  };

  // const userData = props.user ? (
  //   <div>
  //     <h1>Profile</h1>
  //     <p>
  //       <strong>Name:</strong> {name}
  //     </p>
  //     <p>
  //       <strong>Email:</strong> {email}
  //     </p>
  //     <p>
  //       <strong>ID:</strong> {id}
  //     </p>
  //     <aside>
  //       <button onClick={handleRemove}>Delete Your Account</button>
  //       <button>Favorite</button>
  //     </aside>
  //   </div>
  // ) : (
  //   <h4>Loading...</h4>
  // );

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  const [followers, setFollowers] = useState(0);
  const [follows, setFollows] = useState(0);
  

  return (
    <>
    <div className="container content-container">
        {/* { props.user ? userData : errorDiv() } */}
        <div className="row">
          <div className="col-4">
            <h2>Profile</h2>
            <img className="profile-img" src={props.user.picture} alt="angelb" />
            <h4>{props.user.name}</h4>
            <p>{props.user.location}</p>
            <p>{props.user.bio}</p>
            <button>Follow</button>
            <div className='followers-section'>
              <p>{followers} Followers</p>
              <p>{follows} Following</p>
            </div>

            <h5>Top Friends</h5>
          </div>
        </div>
      </div>
      </>
  );
};

export default ProfileSection;

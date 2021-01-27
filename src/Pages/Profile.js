import axios from "axios";
import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import UserFeed from "../components/UserFeed";
import ProfileSection from "../components/ProfileSection";


const Profile = () => {

  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // if there is no token in localStorage, then the user is in authenticated
    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.jwtToken);
      setCurrentUser(token);
    }
  }, []);


  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }
  return (

    <>
      <div className="container content-container">
        {/* { props.user ? userData : errorDiv() } */}
        <div className="row">
          <div className="col-4">
            <ProfileSection user={currentUser} component={ ProfileSection } />
            
          </div>
          <div className="col-8 profile-posts">

            <h2>My Posts</h2>
            <UserFeed user={currentUser}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

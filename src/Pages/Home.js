import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import CreatePost from "../components/CreatePost";
import Feed from "../components/Feed";
import ProfileSection from "../components/ProfileSection";

const Home = (props) => {

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

  const nowCurrentUser = (userData) => {
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
      <>

    <div className="container page-container">
      <div className="row">
        <div className="content-containers col-sm">
          <ProfileSection user={currentUser}  component={ ProfileSection } />
        </div>
        <div className="content-containers feed col-sm-6">
          <Feed />
        </div>
        <div className="content-containers col-sm">
          <CreatePost user={currentUser} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

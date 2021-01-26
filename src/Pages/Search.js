import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import AllUsers from './AllUsers';
import CreatePost from "../components/CreatePost"
import ProfileSection from "../components/ProfileSection"

const Search = (props) => {

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

    <div class="container page-container">
      <div class="row">
        <div class="content-containers col-sm">
          <ProfileSection user={currentUser}  component={ ProfileSection } />
        </div>
        <div class="content-containers feed col-sm-6">
          <AllUsers />
        </div>
        <div class="content-containers col-sm">
          <CreatePost user={currentUser} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Search;

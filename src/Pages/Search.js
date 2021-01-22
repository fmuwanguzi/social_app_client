import React from "react";

import SearchUsers from "../components/SearchUsers"
import PostStatus from "../components/PostStatus"
import Navbar from "../components/Navbar"

const Search = () => {
  return (
      <>
      <Navbar />
    <div class="container page-container">
      <div class="row">
        <div class="content-containers col-sm">
          <h2>Profile</h2>
          <h4>Angel Barranco</h4>
          <p>Fresno,CA</p>
          <p>
            I’m a web developer who partially has an idea of what he is doing
          </p>
          <button>Follow</button>
          <p>89 Followers</p>
          <p>112 Following</p>

          <h5>Top Friends</h5>
        </div>
        <div class="content-containers feed col-sm-6">
          <SearchUsers />
        </div>
        <div class="content-containers col-sm">
          <PostStatus />
        </div>
      </div>
    </div>
    </>
  );
};

export default Search;

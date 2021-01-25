import React from "react";

import SearchUsers from "../components/SearchUsers"
import PostStatus from "../components/PostStatus"
import ProfileSection from "../components/ProfileSection"

const Search = (props) => {




  return (
      <>

    <div class="container page-container">
      <div class="row">
        <div class="content-containers col-sm">
          <ProfileSection />
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

import React from "react";
import PostStatus from "../components/PostStatus";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar"
import ProfileSection from "../components/ProfileSection"

const Home = () => {
  return (
      <>
       <Navbar /> 
    <div class="container page-container">
      <div class="row">
        <div class="content-containers col-sm">
          <ProfileSection />
        </div>
        <div class="content-containers feed col-sm-6">
          <Feed />
        </div>
        <div class="content-containers col-sm">
          <PostStatus />
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;

import React from "react";
import PostStatus from '../components/PostStatus'
import Feed from '../components/Feed'

const Home = () => {
  return (
    <div class="container page-container">
      <div class="row">
        <div class="content-containers col-sm">
            <h2>Profile</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione incidunt consequatur aperiam voluptate quasi non magnam rerum, illum sit dolores facilis, soluta facere suscipit corporis quaerat ad quis sunt molestiae.</p>
        </div>
        <div class="content-containers feed col-sm-6">
            <Feed />
        </div>
        <div class="content-containers col-sm">
            <PostStatus />
        </div>
      </div>
    </div>
  );
};

export default Home;

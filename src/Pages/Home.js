import React from "react";

const Home = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
            <h2>Profile</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione incidunt consequatur aperiam voluptate quasi non magnam rerum, illum sit dolores facilis, soluta facere suscipit corporis quaerat ad quis sunt molestiae.</p>
        </div>
        <div class="col-6">
            <h2>Status Feed</h2>
            <div className='post-container'>
                <h4>Update #1</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quasi deleniti doloremque veniam consequuntur? Fugit cum molestiae voluptatibus pariatur officia libero obcaecati! Aliquid quam dolore impedit, veniam quaerat voluptatibus quos?</p>
            </div>
            <div className='post-container'>
                <h4>Update #1</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi quasi deleniti doloremque veniam consequuntur? Fugit cum molestiae voluptatibus pariatur officia libero obcaecati! Aliquid quam dolore impedit, veniam quaerat voluptatibus quos?</p>
            </div>
        </div>
        <div class="col">
            <h2>Update Status</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum nihil aut iure accusamus, odit alias enim saepe ducimus! Deleniti quas esse in reprehenderit ex fugit aut autem eos dolorem dignissimos?</p>
            <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";

const Feed = () => {
  const posts = [
    {
      id:1,
      user: 'Brenda',
      username: 'bbrenda2004',
      content: 'When can we go back to normal? Asking for a friend',
      image: 'https://cf.ltkcdn.net/socialnetworking/images/std/168795-400x400-Female-Avatar-2-lg.jpg'
    },

    {
      id:2,
      user: 'James',
      username: 'jjabarr',
      content: 'First post! Lets go!!!!',
      image: 'https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg'
    },

    {
      id:3,
      user: 'Angel',
      username: 'abarr95',
      content: 'yall seeing this on tv ????',
      image: 'https://www.w3schools.com/howto/img_avatar.png'
    },

    {
      id:4,
      user: 'David',
      username: 'thecrocman21',
      content: 'Cranky, wus all this',
      image: 'https://image.flaticon.com/icons/png/512/147/147144.png'
    },

  ];

  return (
    <div className="feed-container">

      <h2>Status Feed</h2>
      {posts.map((post, id) => (
        <div key={id} className ='post-container'>
          <img className='post-image' src={post.image} alt=""/>
          <h6>{post.user}@{post.username}</h6>
          <p>{post.content}</p>
        </div>
        
      ))}

      
    </div>
  );
};

export default Feed;

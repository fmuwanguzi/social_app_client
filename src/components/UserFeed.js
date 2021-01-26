import React, { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const UserFeed = (props) => {
  const [allPosts, setAllPosts] = useState([]);

useEffect(() => {
    if(!props.user){
        return (
            <div>
                loading...
            </div>
        )
    }
      axios.get(`${REACT_APP_SERVER_URL}/api/users/posts/${props.user.id}`)
      .then(res => {
          setAllPosts(res.data)
      })
  },[props.user])


  console.log(allPosts);

  return (
      <div>
          {allPosts.reverse().map((post, id) => (
              <h2 key={id}>{post}</h2>
          ))}
      </div>
  )
};

export default UserFeed;

// const [allallPosts, setAllPosts] = useState('');

//   const posts = axios.get(`${REACT_APP_SERVER_URL}/api/users/posts/${props.user.id}`)
//   useEffect(() => {
//     posts.then((res) => {
//         console.log(res.data);
//       setAllPosts(res.data);
//     });

//   console.log(posts);

//   return (
//       <div className='user-feed'>
//           {/* {} */}
//       </div>
//   )

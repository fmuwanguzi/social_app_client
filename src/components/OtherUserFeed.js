import React, { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const OtherUserFeed = (props) => {
  const [currentPosts, setCurrentPosts] = useState([]);

  const id = props.match.params.id;

useEffect(() => {
    if(!props.user){
        return (
            <div>
                loading...
            </div>
        )
    }
      axios.get(`${REACT_APP_SERVER_URL}/api/users/posts/${id}`)
      .then(res => {
          setCurrentPosts(res.data)
      })
  },[props.user])


  console.log(currentPosts);

  return (
      <div>
          
      </div>
  )
};

export default OtherUserFeed;
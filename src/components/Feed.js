import React, { useEffect, useState } from 'react';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Feed = (props) => {
  
  const [allUsers, setAllUsers] = useState('')
  const [followers, setfollowers] = useState('')
  
  //get route for all users
  const users = axios.get(`${REACT_APP_SERVER_URL}/api/users/all`)
  useEffect(() => {
      users.then(res=>{
          setAllUsers(res.data)
      })
  },[])
  console.log(allUsers);
  console.log(allUsers[0])
 
  if (allUsers){
      return(
          
          <div>
              <h2>Feed</h2>
            {allUsers.map((user, id)=>(
            <div key={id} className ='post-container'>
                <img className='post-image' src={user.picture} alt=""/>
                <h5>{user.name} </h5>
                  <p>{user.posts.slice(-1)}</p>
                
              </div>
            ))}  
            
          </div>
      )
  }else{
      return(
          <div>
              <h2> no users available</h2>
          </div>

      )
  }
};

export default Feed;

import React, { useEffect, useState } from "react";
import axios from "axios";


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const ViewProfile = (props) => {
  const [user, setUser] = useState("");
  const [followers, setfollowers] = useState("");
  const [currentPosts, setCurrentPosts] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/api/users/one/${id}`).then((res) => {
      setUser(res.data);
    });
  }, [props.user]);

  console.log(user);

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

  return (
    <div className="container content-container other-user-profile">
      <div className="row">
        <div className="col-4">
          <img className="profile-img" src={user.picture} alt="angelb" />
          <h4>{user.name}</h4>
          <p>{user.bio}</p>
          <p>{user.follows}</p>
          <button className="btn btn-primary">Follow</button>
        </div>
        <div className="col-8 profile-posts">
            
        {currentPosts.reverse().map((post, id) => (
            <div key={id} className ='post-container'>
              <img className='post-image' src={user.picture} alt=""/>
              <h6>{user.name}</h6>
              <p>{post}</p>
              </div>
          ))}
        </div>

          </div>
    </div>
  );
};

export default ViewProfile;
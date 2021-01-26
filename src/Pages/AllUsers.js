import React, { useEffect, useState } from 'react';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const AllUsers = (props) => {

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

    const handleFollowerChange = (e) => {
        setfollowers(e.target.value)
    }

    const handleFollow = (e) => {
        console.log(e, 'this is e')
        console.log('your follows array',props.user.followers)
        const id = props.user.id;
        console.log(id)
        const followsUpdate = {
            followers,
        };

        axios.put(`${REACT_APP_SERVER_URL}/api/users/followers/add/${id}`, followsUpdate)
        .then((response)=>{
            console.log(response, 'follower has been added')
        })
        .catch((error) => {
            console.log(error);
        })
    }

    console.log(allUsers);
   
    if (allUsers){
        return(
            
            <div>
                <h2>All users</h2>
              {allUsers.map((user, idx)=>(
              <div key={idx} className ='post-container'>
                  <img className='post-image' src={user.picture} alt=""/>
                  <h6><a href={`/user/${user._id}`}>{user.name}</a> </h6>
              <h6>Followers: {user.followers.length} </h6>
              <h6>Following: {user.follows.length}</h6>
                    <h7>Recent Post: {user.posts.slice(-1)} </h7>
                <br></br>
                <button onChange={handleFollowerChange} onClick={ ()=>handleFollow(user._id)}> Follow </button>
                  
                </div>
              ))}  
              
            </div>
        )
    }else{
        return(
            <div>
                <h1> no users available</h1>
            </div>

        )
    }
}

export default AllUsers



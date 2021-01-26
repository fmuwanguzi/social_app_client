import React, { useEffect, useState } from 'react';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const AllUsers = (props) => {

    const [allUsers, setAllUsers] = useState('')
    const [followers, setFollowers] = useState([])
    
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
        setFollowers(e.target.value)
    }

    const handleFollow = (e) => {
        //e.preventDefault();
        console.log('your follows array',props.user.followers)
        const id = props.user.id;
        console.log(id)
        const followersUpdate = {
            followers
        };

        axios.put(`${REACT_APP_SERVER_URL}/api/users/followers/add/${id}`, followersUpdate)
        .then((response)=>{
            console.log(response, 'follower has been added')
        })
        .catch((error) => {
            console.log(error);
        })
    }
   
    if (allUsers){
        return(
            
            <div>
                <h2>All users</h2>
              {allUsers.map((user, id)=>(
              <div key={id} className ='post-container'>
                  <img className='post-image' src={user.picture} alt=""/>
                  <h6>Name: {user.name} </h6>
                <h6>followers: {user.followers.length} </h6>
                <h6>follows: {user.follows.length}</h6>
                <h6>last post: {user.posts.slice(-1)} </h6>
                <br></br>
                
                <form onClick={handleFollow}>
                <input hidden type="text" value={user._id} onChange={handleFollowerChange} />
                <button type="button"> Add Follower test </button>
                </form>
                {/* onChange={handleFollowerChange}*/}  
                {/* <form>
                    
                <button type="submit" onClick={ ()=>handleFollow.bind(user._id)}> Follow </button>
                </form> */}
                {/* <button value={user._id} onClick={handleFollow}> Follow </button> */}
                
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



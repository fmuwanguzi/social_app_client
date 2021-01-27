import React, { useEffect, useState } from 'react';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const AllUsers = (props) => {

    
    const [allUsers, setAllUsers] = useState('')
    const [follows, setFollows] = useState([])
    
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
        console.log('this is the followersbuttontest')
        setFollows(e.target.value)
    }

    const handleFollow = (id) => {
        //e.preventDefault();
        // console.log('your follows array',props.user.follows)
        // const id = props.user.id;
        // console.log(id)
        // const followersUpdate = {
        //     follows
        // };

        axios.put(`${REACT_APP_SERVER_URL}/api/users/follows/add/${id}`)
        .then((response)=>{
            console.log(response, 'followe r has been added')
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
                  <h5>Name: {user.name} </h5>
                {/* <h6>followers: {user.followers.length} </h6> */}
                <p>follows: {user.follows.length}</p>
                <p>last post: {user.posts.slice(-1)} </p>
                
                {/* <form onClick={handleFollow}>
                <input hidden type="text" value={user._id} onChange={handleFollowerChange} />
                <button > Add Follower test </button>
                </form> */}
                {/* onChange={handleFollowerChange}*/}  
               
                <button type="submit" className="btn btn-primary" onClick={()=> handleFollow(user._id)}> Follow </button>
            
                {/* <button value={user._id} onClick={ ()=>handleFollow()}> Follow </button> */}
                
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



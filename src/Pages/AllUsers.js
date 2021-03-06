import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const AllUsers = (props) => {

    const [allUsers, setAllUsers] = useState('')
    const [follows, setFollows] = useState([])
    const [redirect, setRedirect] = useState('')

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
            console.log(response, 'follow has been added')
            setRedirect(true)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    console.log(allUsers);
   
    if (redirect) return <Redirect to='/home' />

    if (allUsers){
        return(
            
            <div>
                <h2>All users</h2>
              {allUsers.map((user, idx)=>(
              <div key={idx} className ='post-container'>
                  <img className='post-image' src={user.picture} alt=""/>
                  <h5><a href={`/user/${user._id}`}>{user.name}</a> </h5>
              {/* <h6>followers: {user.followers.length} </h6> */}
              <p>follows: {user.follows.length}</p>
                    <p>Recent Post: {user.posts.slice(-1)} </p>
                <button className="btn btn-primary" onChange={handleFollowerChange} onClick={ ()=>handleFollow(user._id)}> Follow </button>
                  
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
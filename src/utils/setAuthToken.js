import axios  from 'axios';

//this utility will add authorized user's JWT to the request header
//any routes that are protected will require the JWT in order to acces them.

const setAuthToken = (token) => {
    if(token){
        //Apply the token to every request header 
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

export default setAuthToken;
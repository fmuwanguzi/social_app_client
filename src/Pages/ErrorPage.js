import React from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends React.Component{
    render(){
        return(
        <div>
             <Link to="/">Welcome back</Link>
        </div>
        )
    }
}

export default ErrorPage;
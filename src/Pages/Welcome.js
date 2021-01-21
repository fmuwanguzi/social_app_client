import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="landing-page">
      <h1>KickIt</h1>
      <p className='intro-text'>Connect with friends, family and many others around the world.</p>
      <div className="btn-container">
        <Link to='/login'>
          <button type="button" className="login-btn">
            Log In
          </button>
        </Link>

        <Link to='signup'>
          <button type="button" class="signup-btn">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

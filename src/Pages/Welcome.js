import React from "react";

const Welcome = () => {
  return (
    <div className="landing-page">
      <h1>KickIt</h1>
      <p>Connect with friends, family and many others around the world.</p>
      <div className="btn-container">
        <button type="button" className="login-btn">
          Log In
        </button>
        <button type="button" class="signup-btn">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Welcome;

// Imports
import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
// import keys from '../utils/credentials';
// const { REACT_APP_SERVER_URL } = keys;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword && password.length >= 8) {
      const newUser = { name, email, password };

      axios
        .post(`${REACT_APP_SERVER_URL}/api/users/register`, newUser)
        .then((response) => {
          console.log(response);
          setRedirect(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert(
        "Password needs to be at least 8 characters or more. Please try again."
      );
    }
  };

  if (redirect) return <Redirect to="/login" />;
  return (
    <div className="landing-page-signup">
      <h1>KickIt</h1>
      <p className="intro-text-signup">
        Connect with friends, family and many others around the world.
      </p>
      <form className='get-started-forms'onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleName}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            className="form-control"
          />
        </div>
        <button type="submit" className="signup-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;

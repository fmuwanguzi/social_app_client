import userEvent from "@testing-library/user-event";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaKickstarter } from "react-icons/fa";

const Navbar = (props) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <FaKickstarter size={56} color="#ABC4FF" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07"
          aria-controls="#navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExample07">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/settings">
                Settings
              </NavLink>
            </li>
          </ul>
          {props.isAuth ? (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
            
              </li>
              <li className="nav-item">
                <span
                  onClick={props.handleLogout}
                  className="nav-link logout-link"
                >
                  Logout
                </span>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/signup">
                  Sign Up
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};


export default Navbar;

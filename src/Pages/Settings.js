import React from "react";
import Navbar from "../components/Navbar"

const Settings = () => {
  return (
      <>
      <Navbar />
    <div className="container settings-container">
      <div className="row">
        <div class="col">
          <h2>Settings</h2>
          <div className="input-container">
            <input
              class="form-control me-2"
              type="text"
              placeholder="New Username"
            />
            <input
              class="form-control me-2"
              type="text"
              placeholder="New Name"
            />
            <input
              class="form-control me-2"
              type="text"
              placeholder="New Email"
            />
          </div>
          <button>Update</button>
        </div>
      </div>
      <div className="row">
        <div class="col">
          <h2>Top Friends</h2>
          <p>Arrange your top friends</p>

          <button>Update</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Settings;

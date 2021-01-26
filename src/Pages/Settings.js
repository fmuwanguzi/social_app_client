import axios from "axios";
import React, { useState } from "react";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Settings = (props) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const [bio, setBio] = useState("");

  console.log(props.user.name);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.value);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    axios.delete(`${REACT_APP_SERVER_URL}/api/users/${props.user.id}`).then((response) => {
      console.log(response, "account is deleted");
      // console.log(response.data);
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const userUpdate = {
      name,
      picture,
      bio,
    };

    axios
      .put(
        `${REACT_APP_SERVER_URL}/api/users/update/${props.user.id}`,
        userUpdate
      )
      .then((res) => {
        console.log(res, "  settings updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container settings-container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleUpdate}>
              <h2>Settings</h2>
              <div className="input-container">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Profile picture link.."
                  onChange={handlePictureChange}
                />
                <input
                  className="form-control me-2"
                  type="text"
                  value={name}
                  placeholder="Enter new name.."
                  onChange={handleNameChange}
                />
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Bio..."
                  onChange={handleBioChange}
                />
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Update
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* 
             <h2>Top Friends</h2>
              <p>Arrange your top friends</p>
           */}
            <button onClick={handleRemove} type="submit" className="btn btn-danger float-r">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;

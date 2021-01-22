import React from "react";

const ProfileSection = () => {
  return (
    <div>
      <h2>Profile</h2>
      <img
        className="profile-img"
        src="https://cdn2.vectorstock.com/i/1000x1000/49/86/man-character-face-avatar-in-glasses-vector-17074986.jpg"
        alt="angelb"
      />
      <h4>Angel Barranco</h4>
      <p>Fresno,CA</p>
      <p>I’m a web developer who partially has an idea of what he is doing</p>
      <button>Follow</button>
      <p>89 Followers</p>
      <p>112 Following</p>

      <h5>Top Friends</h5>
    </div>
  );
};

export default ProfileSection;

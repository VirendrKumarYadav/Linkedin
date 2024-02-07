import React, { useState } from "react";
import Header from "../componants/Home/common/Header/Header"
import Profile from "../componants/Profile/Profile";
import ProfileEdit from "./Element/Profile/ProfileEdit";

const ProfileComponants = () => {
    const { edit, setEdit } = useState(false)
  return (
    <div className="home-container">
      <Header clsName="nav-icon default-selected" />
      {edit ? (
        <ProfileEdit setEdit={setEdit} />
      ) : (
        <Profile setEdit={setEdit} />
      )}
    </div>
  );
};

export default ProfileComponants;

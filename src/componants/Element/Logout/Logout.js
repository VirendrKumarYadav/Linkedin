import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sign_out } from "../../../firebase/";
import { getCurrentUser } from "../../../api/FirestoreAPI";
import Button from "../Button";
import "./index.scss";

export default function ProfilePopup() {
  let navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div className="popup-card">
      <p className="name"></p>
      <p className="headline"></p>
      <Button
        title="View Profile"
        onClick={() =>
          navigate("/profile", {
            state: {},
          })
        }
      />
      <Button title="Log out" onClick={()=>sign_out()} />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Loader from "../componants/LoadingConfig/Loader";
import Signup from "../componants/Signup/JoinIn";
import Dashboard from "../componants/dashboard/Dashboard";

export default function DashboardNav(prop) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <Dashboard />;
}

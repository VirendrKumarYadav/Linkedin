import React, { useEffect, useState } from "react";
import Home from "../componants/Home/Home";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../API/FireStore";
import Loader from "../componants/LoadingConfig/Loader";

export default function Home(prop ) {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/signup");
      } else {
        setLoading(false);
      }
    });
  }, []);
  return loading ? <Loader /> : <Home  />;
}

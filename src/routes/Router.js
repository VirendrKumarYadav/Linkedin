import { createBrowserRouter } from "react-router-dom";
import Home from "../componants/Home/Home";
import Dashboard from "../componants/dashboard/Dashboard";
import About from "../componants/about/about";
import Signin from "../componants/Signin/Signin";
import JoinIn from "../componants/Signup/JoinIn";

export const Router= createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <JoinIn />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  
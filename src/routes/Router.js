import { createBrowserRouter } from "react-router-dom";
import HomeNav from "../PagesNav/Home";
import Dashboard from "../componants/dashboard/Dashboard";
import About from "../componants/about/about";
import Signin from "../componants/Signin/Signin";
import JoinIn from "../componants/Signup/JoinIn";
import ProfileNav from "../PagesNav/ProfileNav";
import Notification from "../componants/Notification/Notification";
import Job from "../componants/Job/Job";
import Massaging from "../componants/Massaging/Massaging";
import MyNetwork from "../componants/MyNetwork/Mynetwork";
import Header from "../componants/Home/common/Header/Header";

export const Router = createBrowserRouter([
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
    element: <HomeNav />,
  },
  {
    path: "/profile",
    element: <ProfileNav />,
  },
  {
    path: "/network",
    element: (
      <div>
        <Header />
        <MyNetwork />
      </div>
    ),
  },
  {
    path: "/messaging",
    element: (
      <div>
        <Header />
        <Massaging />
      </div>
    ),
  },
  {
    path: "/jobs",
    element: (
      <div>
        <Header />
        <Job />
      </div>
    ),
  },
  {
    path: "/notifications",
    element: (
      <div>
        <Header />
        <Notification />
      </div>
    ),
  },
]);

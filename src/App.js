import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { API_Base } from "./API/API_Base";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Store } from "./reducer/Store";
import Home from './componants/Home/Home'
import About from './componants/about/about'
import Signin from './componants/Signin/Signin';
import JoinIn from './componants/Signup/JoinIn';


function App() {

  const [data, setData] = useState({});
  
//  fetch API data
  
useEffect(() => {
  API_Base("https://api.themoviedb.org/3/movie/changes", {
    page: 1,
    language: "en-US",
    sort_by: "created_at.asc",
  })
    .then((json) => setData(json))
    .catch((err) => console.error("error:" + err));
  console.log(data);
 
},[]);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
  ]);
  
  return (
    <Provider store={Store}>
      <RouterProvider router={router}>
        <h1>Hello App js</h1>
      </RouterProvider>
    </Provider>
  );
}

export default App;

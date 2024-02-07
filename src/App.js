import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { API_Base } from "./API/API_Base";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Store } from "./reducer/Store";
import {app} from '../src/firebase/firebase'
import AuthProvider from "./firebase/AuthProvider";
import { Router } from './routes/Router'
 import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
 import ConfigLoading from './componants/LoadingConfig/ConfigLoading';



function App() {

  const [data, setData] = useState({});
  
//  fetch API data
  
useEffect(() => {
//   API_Base("https://api.themoviedb.org/3/movie/changes", {
//     page: 1,
//     language: "en-US",
//     sort_by: "created_at.asc",
//   })
//     .then((json) => setData(json))
//     .catch((err) => console.error("error:" + err));
//      console.log(data);
 
},[]);


  
  
  return (
    <AuthProvider>
      <Provider store={Store}>
        <RouterProvider router={Router}></RouterProvider>
        <ToastContainer/>
      </Provider>
    </AuthProvider>
  );
}

export default App;

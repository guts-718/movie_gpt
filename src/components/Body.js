import React, { useEffect } from 'react'
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from './Login';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';
function Body() {
    const auth = getAuth();
    const dispatch= useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>  // here by mistake <body/>  the to it was giving router inside router error
        },{
            path:"/browse",
            element:<Browse/>
        }
       ])
    useEffect(()=>{
    onAuthStateChanged(auth,(user) => {
    if (user) {
        
        const {uid, email, displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));

        // ...
    } else {
        dispatch(removeUser());
        // User is signed out
        // ...
    }
});

    },[])

  return (
     <RouterProvider router={appRouter}/>
    
  )
}

export default Body
import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';

function Body() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>  // here by mistake <body/>  the to it was giving router inside router error
        },{
            path:"/browse",
            element:<Browse/>
        }
       ])


  return (
     <RouterProvider router={appRouter}/>
    
  )
}

export default Body
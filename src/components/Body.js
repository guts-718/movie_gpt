// router ke lie --> createBrowserRouter and routerProvider (both name imported from react-router-dom) --> path aur element ke sath sayd errorElement bhi hota hai
// createBrowserRouter me we pass array of route objects (containing) path, element and error element

import React from 'react'
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';


// we now use functional rfce in react... so everything is written inside of function and then it is returned 
// inside function we have created the router and have returned it

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
//default export so we dont need parenthesis while importing
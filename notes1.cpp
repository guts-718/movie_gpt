/*

- CREATE REACT APP
- TAILWIND CSS
- IN SRC ->> COMPONENTS AND UTILS
- INSIDE COMPONENTS -->BODY, LOGIN, BROWSE, HEADER
- USE REACT-ROUTER-DOM
- INSIDE BODY.JS MAKE THE ROUTER -->
        import {createBrowserRouter} from "react-router-dom";
        import { RouterProvider } from 'react-router-dom';
- INSIDE APP.JS --> return (
                            <Body/>
                            );
- inside login page --> netlix text on top left corner and the background image
- the login form 
- firebase setup
-- inside the project in firebase --> goto project overview to enable authentication
- npm i firebase
- npm install -g firebase-tools
- firebase login
- firebase init

npm install -D react-router-dom
 const [name] = useRef(null); -- doing this causes an error --> useRef is not an iterable
onSubmit={(e)=>{e.preventDefault()}} aisa form tag ke andar kara jata hai
onClick={func()} --> () krne se infinite loop me phas jaenge

- to create redux library -> we install 2 toolkits
  1. npm i -D @reduxjs/toolkit
  2. npm i react-redux


-- for redux --> create appStore.js in utils and config the redux there, then create various slices in the same utils directory and then wrap the App.js with preovider store={}

- if the user is logged in redirect him to the browse page
- if the user is not logged in make sure he cannot access the browse route - it should re route it back to the login page
- what we have to do is to check for auth in the browse route also
- sara routing we are doing inside header as it is always present and moreover it is inside our route provider,, earlier we were trying to do so from the body but we failed





*/
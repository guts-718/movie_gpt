import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isLoggedIn, setIsLoggedIn]=useState(true);
  const toggleLogin=()=>{
    setIsLoggedIn(!isLoggedIn);
  }
  return(
   <div className="flex">
    <Header/>
    <img alt="netflix-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
    <form className="absolute bg-black w-3/12 p-12 my-36 mx-auto space-y-3 right-0 left-0 text-white rounded-lg">
        <h1 className="text-3xl font-bold py-4">{isLoggedIn?"Sign in":"Register"}</h1>
        {!isLoggedIn && <input type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-800 rounded-lg w-full"></input>}
        <input type="text" placeholder="Email" className="p-4 my-4 bg-gray-800 rounded-lg w-full"></input>
        <input type="password" placeholder="Password" className="p-4 my-4 bg-gray-800 rounded-lg w-full"></input>
        <button className="bg-white text-red-700 w-full rounded-lg p-4 my-6">{isLoggedIn?"Sign Up":"Log in"}</button>
        <span className="cursor-pointer text-Xxl font-bold" onClick={toggleLogin}>{isLoggedIn?"New to netflix?Sign Up":"Already Registered? LogIn"}</span>
    </form>
    </div>
  )
}

export default Login;
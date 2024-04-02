// we have done routing here as header is present everywhere
// firebase provides onAuthStateChange which is very useful as it is automatically triggered when any change related to signIn/ logOut happens
// hooks are always named imported (useEffect and useDispatch., etc)
// useDispatch and useSelector are probably the most important hooks coming from react-redux
// we can directly use the redux store without needing to use the useState hook
// Navigate >> useNavigate >> react-router-dom

import { onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/Firebase";
// named import {addUser, removeUser} --> these are the reducers which have been named exported like export const { addUser, removeUser } = userSlice.actions;
import { addUser,removeUser } from '../utils/userSlice';
import {SUPPORTED_LANGUAGES, LOGO} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // store.user -- implies that there is a slice with the name attribute "user" --> createSlice has three attributes --> name, initialState, reducers
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // store.user.showGptSearch --> means the slice named gpt has within its initialState object --> a key named showGptSearch
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  };
  
  // addUser: (state, action) => {
  //   return action.payload;
  // },
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  // toggleGptSearchView: (state) => {
  //   state.showGptSearch = !state.showGptSearch;
  // },
  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  // changeLanguage: (state, action) => {
  //   state.lang = action.payload;
  // },
  return(
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
    {user && (
      <div className="flex p-2 justify-between">
        {showGptSearch && (
          <select
            className="p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}
        <button
          className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
        <img
          className="hidden md:block w-12 h-12"
          alt="usericon"
          src={user?.photoURL}
        />
        <button onClick={handleSignOut} className="font-bold text-white ">
          (Sign Out)
        </button>
      </div>
    )}
  </div>
);
};
export default Header;
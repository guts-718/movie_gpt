import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies"
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

//import { dispatch } from '@reduxjs/toolkit';
const Browse = () => {
  const gpt =useSelector(store=>store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return(
    <div>
      <Header/>
      {gpt?<GptSearch/>:<>(<MainContainer/>  
      <SecondaryContainer/>)</>
      }
    </div>
  )
}
// here <></> - using fragments was necessary as react only deals with a single parent element -- inside the conditional ternary inside of the return
// header is always present 
export default Browse;
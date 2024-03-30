import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies"

//import { dispatch } from '@reduxjs/toolkit';
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return(
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>

    </div>
  )
}

export default Browse;
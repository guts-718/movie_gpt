import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../utils/moviesSlice";
const useNowPlayingMovies=()=>{
        const dispatch=useDispatch();
        const getTMDBmovies = async()=>{
          const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(response => response.json())
            dispatch(addNowPlayingMovies(res.results))
        }
        useEffect(()=>{
           getTMDBmovies();
        },[])

}

export default useNowPlayingMovies;
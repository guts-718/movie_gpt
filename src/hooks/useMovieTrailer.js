import { options } from '../utils/constants'
import { useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';


const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
const getMovieVideo=async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",options)
    const json=await data.json();
    const trailers=json.results.filter((video) => video.type==="Trailer");
    const vid=trailers.length>0?trailers[0]:json.results[0];
    // setId(vid.key);
    console.log(vid);
    dispatch(addTrailerVideo(vid));
   
}
// let k={"https://www.youtube.com/embed/"+Id}
useEffect(()=>{
    getMovieVideo();
},[]);
}

export default useMovieTrailer;
import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'
function VideoBackground({movieId}) {
 
    const trailervideo=useSelector((store)=>store.movies?.trailerVideo)
    useMovieTrailer(movieId);
    // const [Id,setId]= useState(null);
   
  return (
    <div className='text-red-500'>
        <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailervideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
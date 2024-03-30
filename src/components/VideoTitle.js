import React from 'react'

function VideoTitle({title, overview}) {
 let s=overview.substring(0,150);
 s+="..."
 
  return (
   <div className='absolute w-1/2 h-screen bg-gradient-to-r from-black text-white opacity-[85%]'>
    <h1 className='mt-36 text-4xl font-bold px-4'>{title}</h1>
    <p className='text-lg w-2/5 mt-5 px-4'>{s}
    </p>
    <div className='flex space-x-3 px-4'>
        <button className="bg-white text-md text-black rounded-md mt-1 w-24 h-8 px-2"><span className=''>▶</span>Play</button>
        <button className="bg-gray-700 text-md text-white rounded-md  mt-1 w-24 h-8 px-2">More Info</button>
    </div>
   </div>
  )
}

export default VideoTitle
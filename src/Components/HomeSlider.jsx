/* eslint-disable react/prop-types */

import imdbLogo from '../assets/imgs/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import watchTrailer from '../assets/imgs/Play.svg'
function SlideComponent({Trending}) {


  return (
    <div className={`transition-all duration-700  gap-11 ease-in-out h-screen bg-cover bg-center lg:text-start text-center relative  `}  style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${Trending.backdrop_path}')`}} > 
     <div className='container flex flex-col text-white gap-7  relative z-[8]  h-full justify-center items-center lg:items-start  '> 
        <h2  className='text-6xl  leading-[56px]  tracking-wider'>{Trending.original_title}</h2>
        <div>
        <p className='flex items-center gap-4'><img src={imdbLogo} /> {Trending.vote_average}/10</p>

        </div>
                    <p className=' text-sm w-[302px] '>{Trending.overview}</p>
     <button className='uppercase bg-rose-700 flex gap-2 px-5 py-2 rounded-md w-fit'>
       <img src={watchTrailer}/>
        Watch trailer
     </button>
    </div>
    <div className='top-0 left-0 absolute  bg-gradient-to-r z-0 from-gray-900 to-blue-950 opacity-80 backdrop-blur-lg w-full  h-full'></div>
     </div>
  )
}

export default SlideComponent
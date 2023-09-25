/* eslint-disable react/prop-types */
import starLogo from '../../assets/imgs/Star.svg'
import extractYearFromDate from '../functions/extractYear'
function ShowDetails({show,trailerId}) {
    console.log(show)
  return ( 
       <div className='flex lg:flex-row flex-col items-center gap-6 px-4 bg-transparent z-10 relative'>
          <div><img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} className='lg:w-[400px] w-full rounded-lg lg:max-w-[400px]'/></div>
      <div className='text-white'>
       <div className='flex justify-between lg:flex-row flex-col'>
        <div className='flex flex-col  mb-6'>
                    <p className='flex gap-2 '><img src={starLogo}/>{show.vote_average.toFixed(1)}/10</p>
        <h5 className='text-2xl font-semibold'>{show.title} ({extractYearFromDate(show.release_date?show.release_date:show.last_air_date)})</h5>
        <span className='text-gray-400 mb-3'>{show.genres.map(genre=>`${genre.name},`)}</span>
        <p className='text-lg font-bold bg-green-700 mb-5 w-fit py-2 px-4 rounded-xl'>{show.original_language}</p>
        <p className='font-bold italic'>{`''${show.tagline}''`}</p>
        </div>
        <div className='flex flex-col gap-3 lg:mb-0 mb-3'>
          {trailerId&&  <button className='bg-rose-700 py-2 px-6 rounded-sm hover:opacity-70 transition-all duration-300' >WATCH TRAILER</button>}
            <button className='bg-green-700 py-2 px-6 rounded-sm'>Add to WatchList</button>
        </div>
       </div>
        <p>{show.overview}</p>
      </div>
   </div>
  )
}

export default ShowDetails
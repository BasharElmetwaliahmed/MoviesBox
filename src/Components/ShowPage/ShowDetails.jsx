/* eslint-disable react/prop-types */

function ShowDetails({show,trailerId}) {
  return (
       <div className='flex lg:flex-row flex-col items-center gap-6 px-4'>
          <div><img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} className='lg:w-[400px] w-full rounded-lg lg:max-w-[400px]'/></div>
      <div className='text-white'>
       <div className='flex justify-between lg:flex-row flex-col'>
        <div className='flex flex-col  mb-6'>
                    <p className='flex gap-2 '><img src={starLogo}/>8.5/10</p>
        <h5 className='text-2xl font-semibold'>Joker (2019)</h5>
        <span className='text-gray-400 mb-3'>Cirme,Drama</span>
        <p className='text-lg font-bold'>2h 2min</p>
        <p>Director:Tod Phillips</p>
        </div>
        <div className='flex flex-col gap-3 lg:mb-0 mb-3'>
          {trailerId&&  <button className='bg-rose-700 py-2 px-6 rounded-sm hover:opacity-70 transition-all duration-300' onClick={()=>setShowTrailer(true)}>WATCH TRAILER</button>}
            <button className='bg-green-700 py-2 px-6 rounded-sm'>Add to WatchList</button>
        </div>
       </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis, nobis ad assumenda dicta, ut in quasi possimus aperiam modi veniam, quisquam suscipit debitis tempora? Hic officiis cupiditate sunt expedita.</p>
      </div>
   </div>
  )
}

export default ShowDetails
/* eslint-disable react/prop-types */
import imdbLogo from '../../assets/imgs/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import extractYearFromDate from '../functions/extractYear'
function ShowContent({show,clickHandler}) {
    const year=extractYearFromDate(show.release_date ? show.release_date :show.first_air_date) 
    if(show)
  return (
            <div className='flex flex-col gap-2'>
          <h5 className='text-gray-400 text-sm font-bold'> {year?year:''}</h5>
          <h3 className='text-lg font-bold text-gray-900 cursor-pointer hover:opacity-70 duration-300' onClick={clickHandler}>{show.original_title?show.original_title:show.original_name}</h3>
          <div className='flex gap-2 items-center'>
            <img src={imdbLogo} alt='imdb logo'/>
            <p>{show.vote_average?show.vote_average:0}/10</p>
          </div>
  </div>
  )
}

export default ShowContent
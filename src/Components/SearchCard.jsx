/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import extractYearFromDate from "./functions/extractYear"
import ShowCard from "./ShowCard.jsx/ShowCard"

function SearchCard({show,type,id}) {
        const year=extractYearFromDate(show.release_date ? show.release_date :show.first_air_date) 
            const navigate=useNavigate()

   const clickHandler=()=>{
    if(type=='movie')
    navigate(`/movies/${id}`)
    else{
      navigate(`/tvseries/${id}`)
    }
   }
  if(!show.poster_path) return null
  return (
    <div>
    <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} onClick={clickHandler} className='hover:opacity-60 mb-3  transition-all duration-300 cursor-pointer' />
          <h5 className='text-gray-400 text-sm font-bold mb-2'> {year?year:''}</h5>
          <h3 className='text-lg font-bold text-gray-900 cursor-pointer hover:opacity-70 duration-300' onClick={clickHandler}>{show.original_title?show.original_title:show.original_name}</h3>    
    </div>
  )
}

export default SearchCard
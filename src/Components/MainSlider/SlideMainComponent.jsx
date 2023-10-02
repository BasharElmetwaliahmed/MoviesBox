/* eslint-disable react/prop-types */
import favIcon from '../../assets/imgs/Favorite.png'
import favIconActive from '../../assets/imgs/Favoriteactive.png'

import imdbLogo from '../../assets/imgs/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png'
import useDetails from '../../hooks/useDetails';
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { addToWatchList, removeFromWatchList } from '../../Redux/Services/WatchListSlice/WatchListSlice';

// eslint-disable-next-line react/prop-types
function SlideMainComponent({id,type}) {
    const {show}=useDetails(id,type)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const watchList =useSelector(state=>state.watchlist).watchList
    const existOnWatchList=watchList && watchList.find(element=>element.id==id)
    const addToWatchListHandler=()=>{
      if(!existOnWatchList){
        dispatch(addToWatchList({id:show.id,type:type}))
      }
      else{
        dispatch(removeFromWatchList(id))
      }
    }
   const clickHandler=()=>{
    if(type=='movie')
    navigate(`/movies/${id}`)
    else{
      navigate(`/tvseries/${id}`)
    }
   }

  return (
    <div >
        {show &&
 <>
        <div className="relative mb-3 mx-auto">
            <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} onClick={clickHandler} className='hover:opacity-60  transition-all duration-300 cursor-pointer' />
            <div className="absolute top-0 left-0 flex justify-between w-full p-3 items-center">
                    <p className='text-white bg-[#F3F4F6] text-gray-900 bg-opacity-50 px-3 font-bold rounded-full  text-sm'>{type}</p>
                <img onClick={addToWatchListHandler}  src={existOnWatchList?favIconActive:favIcon}/>
            </div>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-gray-400 text-sm font-bold'> {type=='movie'?(new Date(show.release_date)).getFullYear():new Date(show.first_air_date).getFullYear()}</h5>
          <h3 className='text-lg font-bold text-gray-900 cursor-pointer hover:opacity-70 duration-300' onClick={clickHandler}>{show.original_title?show.original_title:show.original_name}</h3>
          <div className='flex gap-2 items-center'>
            <img src={imdbLogo} alt='imdb logo'/>
            <p>{show.vote_average}/10</p>
          </div>
          <p className='text-gray-400 text-xs font-bold'>{show.genres.map(genre=>`${genre.name}, `)}</p>
  </div></>}
    </div>
  )
}

export default SlideMainComponent
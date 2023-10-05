/* eslint-disable react/prop-types */
import favIcon from '../../assets/imgs/Favorite.png'
import favIconActive from '../../assets/imgs/Favoriteactive.png'
import useWatchList from '../../hooks/useWatchList'


function ShowCardHeader({id,type,show,clickHandler}) {
   const {addToWatchListHandler,existOnWatchList}=useWatchList(id,show,type)


  return (
            <div className="relative mb-3 mx-auto">
            <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} onClick={clickHandler} className='hover:opacity-60  transition-all duration-300 cursor-pointer' />
            <div className="absolute top-0 left-0 flex justify-between w-full p-3 items-center">
                    <p className='text-white bg-[#F3F4F6] text-gray-900 bg-opacity-50 px-3 font-bold rounded-full  text-sm'>{type}</p>
                <img onClick={addToWatchListHandler} className='hover hover:opacity-50 translate transition-all cursor-pointer'  src={existOnWatchList?favIconActive:favIcon}/>
            </div>
        </div>
  )
}

export default ShowCardHeader
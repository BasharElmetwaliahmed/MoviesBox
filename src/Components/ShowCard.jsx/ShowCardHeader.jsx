/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import favIcon from '../../assets/imgs/Favorite.png'
import favIconActive from '../../assets/imgs/Favoriteactive.png'
import { UpdateWatchList } from "../../Redux/Services/WatchListSlice/WatchListAction"


function ShowCardHeader({id,type,show,clickHandler}) {
    const dispatch=useDispatch()
    const watchList =useSelector(state=>state.watchlist).watchList
    const existOnWatchList=watchList && watchList.find(element=>element.id==id)
    const user=useSelector(state=>state.user).user
    const addToWatchListHandler=()=>{
      if(!existOnWatchList){
        const watchlist=[...watchList,{...show,type}]
        dispatch(UpdateWatchList({watchlist:watchlist,uid:user.uid}))
      }
      else{
        const watchlist=watchList.filter(element=>element.id !==id)
        dispatch(UpdateWatchList({watchlist:watchlist,uid:user.uid}))
      }
    }

  return (
            <div className="relative mb-3 mx-auto">
            <img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} onClick={clickHandler} className='hover:opacity-60  transition-all duration-300 cursor-pointer' />
            <div className="absolute top-0 left-0 flex justify-between w-full p-3 items-center">
                    <p className='text-white bg-[#F3F4F6] text-gray-900 bg-opacity-50 px-3 font-bold rounded-full  text-sm'>{type}</p>
                <img onClick={addToWatchListHandler}  src={existOnWatchList?favIconActive:favIcon}/>
            </div>
        </div>
  )
}

export default ShowCardHeader
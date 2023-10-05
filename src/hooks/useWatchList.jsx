import toastify from "../Components/functions/toast"
import { UpdateWatchList } from "../Redux/Services/WatchListSlice/WatchListAction"
import { useDispatch, useSelector } from "react-redux"


function useWatchList(id,show,type) {
    const dispatch=useDispatch()
    const watchList =useSelector(state=>state.watchlist).watchList
    const existOnWatchList=watchList && watchList.find(element=>element.id==id)
    const user=useSelector(state=>state.user).user


        const addToWatchListHandler=()=>{
      if(!user){
        toastify('you must be logged in')
      }
      if(!existOnWatchList){
        const watchlist=[...watchList,{...show,type}]
        dispatch(UpdateWatchList({watchlist:watchlist,uid:user.uid}))
      }
      else{
        const watchlist=watchList.filter(element=>element.id !==id)
        dispatch(UpdateWatchList({watchlist:watchlist,uid:user.uid}))
      }
    }
  return {addToWatchListHandler:addToWatchListHandler ,existOnWatchList:existOnWatchList }
}

export default useWatchList
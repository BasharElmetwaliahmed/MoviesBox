import { useState } from 'react';
import { useSelector } from 'react-redux';
import SlideMainComponent from '../Components/MainSlider/SlideMainComponent';
function WatchList() {
    const watchList =useSelector(state=>state.watchlist).watchList
    const [watchListFiltered,setFiltered]=useState(watchList)
    const [currentType,setCurrentType]=useState('movie');
    const filterWatchListHandler=(type)=>{
      setCurrentType(type)
     const filteredWatchList=watchList.filter(show=>show.type===type)
      setFiltered(filteredWatchList)

    }
  return (
    <div>
                    <h2 className="text-6xl  font-semibold text-center pt-24">WatchList Page</h2>
                    <div className='flex gap-2 mx-auto items-center justify-center my-6'>
                      <button className={`pagination-btn ${currentType=='tv'?'bg-rose-700 text-white':''}`} onClick={()=>filterWatchListHandler('tv')}>Tv Series</button>
                      <button className={`pagination-btn ${!(currentType=='tv')?'bg-rose-700 text-white':''}`} onClick={()=>filterWatchListHandler('movie')}>Movies</button>
                    </div>
                    <div className='container grid gap-10 lg:grid-cols-4 md:grid-cols-3 py-14'>
        {watchList&& watchListFiltered.map((element)=><SlideMainComponent type={element.type} id={element.id} key={element.id}/>)}

                    </div>

    </div>
  )
}

export default WatchList
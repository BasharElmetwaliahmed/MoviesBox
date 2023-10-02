import  { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import SlideMainComponent from '../Components/MainSlider/SlideMainComponent';
import WatchListChooses from '../Components/WatchList/WatchListChooses';

function WatchList() {
  const { watchList } = useSelector(state => state.watchlist);
  const [watchListFiltered, setFiltered] = useState(watchList);
  const user=useSelector(state=>state.user)
  const [currentType, setCurrentType] = useState('movie');

  const renderSlideMainComponents = () => {
    return watchListFiltered.map((element) => (
      <SlideMainComponent type={element.type} id={element.id} key={element.id} />
    ));
  };
      if(!user.token) return <Navigate to='/' replace={true}/>
  return (
    <div>
      <h2 className="text-6xl font-semibold text-center pt-24">WatchList Page</h2>
      <WatchListChooses
        watchList={watchList}
        setFiltered={setFiltered}
        currentType={currentType}
        setCurrentType={setCurrentType}
      />

      <div className='container grid gap-10 lg:grid-cols-4 md:grid-cols-3 py-14'>
        {watchList ? renderSlideMainComponents() : null}
      </div>
    </div>
  );
}

export default WatchList;

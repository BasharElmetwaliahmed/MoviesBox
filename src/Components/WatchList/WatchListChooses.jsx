/* eslint-disable react/prop-types */

function WatchListChooses({ watchList, setFiltered, setCurrentType, currentType }) {
  const filterWatchListHandler = (type) => {
    setCurrentType(type);
    setFiltered(watchList.filter((show) => show.type === type));
  };

  const buttonTypes = ['tv', 'movie']; 

  return (
    <div className="flex gap-2 mx-auto items-center justify-center my-6">
      {buttonTypes.map((type) => (
        <button
          key={type}
          className={`pagination-btn ${currentType === type ? 'bg-rose-700 text-white' : ''}`}
          onClick={() => filterWatchListHandler(type)}
        >
          {type === 'tv' ? 'TV Series' : 'Movies'}
        </button>
      ))}
    </div>
  );
}

export default WatchListChooses;

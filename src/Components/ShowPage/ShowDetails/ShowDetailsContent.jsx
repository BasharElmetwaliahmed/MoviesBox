import PropTypes from 'prop-types';
import starLogo from '../../../assets/imgs/Star.svg';
import extractYearFromDate from '../../functions/extractYear';

function ShowDetailsContent({ show }) {
  const {
    vote_average,
    title,
    release_date,
    last_air_date,
    genres,
    original_language,
    tagline,
    overview,
  } = show;

  const year = extractYearFromDate(release_date || last_air_date);
  const trailerId=show &&show.videos.length>1 && show.videos.results.find(video=>video.name==="Official Trailer").key

  return (
    <div className='text-white'>
      <div className='flex justify-between lg:flex-row flex-col'>
        <div className='flex flex-col mb-6'>
          <p className='flex gap-2 '>
            <img src={starLogo} alt='Star' />
            {vote_average.toFixed(1)}/10
          </p>
          <h5 className='text-2xl font-semibold'>
            {title} ({year?year:''})
          </h5>
          <span className='text-gray-400 mb-3'>{genres.map((genre) => `${genre.name},`)}</span>
          <p className='text-lg font-bold bg-green-700 mb-5 w-fit py-2 px-4 rounded-xl'>
            {original_language}
          </p>
          <p className='font-bold italic'>{tagline?`''${tagline}''`:''}</p>
        </div>
        <div className='flex flex-col gap-3 lg:mb-0 mb-3'>
          {trailerId && (
            <button className='bg-rose-700 py-2 px-6 rounded-sm hover:opacity-70 transition-all duration-300'>
              WATCH TRAILER
            </button>
          )}
          <button className='bg-green-700 py-2 px-6 rounded-sm'>Add to WatchList</button>
        </div>
      </div>
      <p>{overview?overview:''}</p>
    </div>
  );
}

ShowDetailsContent.propTypes = {
  show: PropTypes.object.isRequired,
};

export default ShowDetailsContent;
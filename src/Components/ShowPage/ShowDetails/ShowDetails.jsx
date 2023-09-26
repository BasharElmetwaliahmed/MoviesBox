import ShowDetailsContent from './ShowDetailsContent';
import PropTypes from 'prop-types';


function ShowDetails({ show }) {
  return (
    <div className='flex lg:flex-row flex-col items-center gap-6 px-4 bg-transparent z-10 relative my-14'>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
          className='lg:w-[400px] w-full rounded-lg lg:max-w-[400px]'
          alt={show.title}
        />
      </div>
      <ShowDetailsContent show={show} />
    </div>
  );
}

export default ShowDetails;

ShowDetails.propTypes = {
  show: PropTypes.object.isRequired,
  trailerId: PropTypes.string, 
};


import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import extractYearFromDate from './functions/extractYear';

function SearchCard({ show, type, id }) {
  const year = extractYearFromDate(show.release_date ? show.release_date : show.first_air_date);
  const navigate = useNavigate();

  const clickHandler = () => {
    if (type === 'movie') {
      navigate(`/movies/${id}`);
    } else {
      navigate(`/tvseries/${id}`);
    }
  };

  if (!show.poster_path) return null;

  return (
    <div className="w-full h-fit">
      <img
        src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
        onClick={clickHandler}
        className="hover:opacity-60 mb-3 w-full !h-60 transition-all duration-300 cursor-pointer"
        alt={show.original_title || show.original_name}
      />
      <h5 className="text-gray-400 text-sm font-bold mb-2">{year ? year : ''}</h5>
      <h3
        className="text-sm font-bold text-gray-900 cursor-pointer hover:opacity-70 duration-300"
        onClick={clickHandler}
      >
        {show.original_title || show.original_name}
      </h3>
    </div>
  );
}

SearchCard.propTypes = {
  show: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default SearchCard;

import PropTypes from 'prop-types';
import SearchCard from '../SearchCard';
import ReactLoading from 'react-loading';

function SearchPageContent({ searchType, isLoading, collection }) {
  return (
    <>
      {!isLoading ? (
        <div className="grid container px-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-6 py-10 items-center">
          {collection?.results.map((show) => (
            <SearchCard type={searchType} show={show} key={show.id} id={show.id} />
          ))}
        </div>
      ) : (
        <ReactLoading
          className="mx-auto align-middle justify-center justify-self-center"
          type="spin"
          color="#ff007f"
          height={50}
          width={50}
        />
      )}
    </>
  );
}

SearchPageContent.propTypes = {
  searchType: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  collection: PropTypes.shape({
    results: PropTypes.array.isRequired,
  }),
};

export default SearchPageContent;

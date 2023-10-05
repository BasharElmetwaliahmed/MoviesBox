import PropTypes from 'prop-types';

function SearchOptions({ setSearchType }) {
  const changeTypeHandler = (e) => {
    setSearchType(e.target.value);
  };

  return (
    <>
      <h2 className="text-6xl font-semibold text-center pt-24">Search Page</h2>
      <select
        onChange={changeTypeHandler}
        name="type"
        id="type"
        className="mx-auto block my-16 bg-black text-white px-5 py-1 rounded-md"
      >
        <option value="movie">Movie</option>
        <option value="tv">TV</option>
      </select>
    </>
  );
}

SearchOptions.propTypes = {
  setSearchType: PropTypes.func.isRequired,
};

export default SearchOptions;

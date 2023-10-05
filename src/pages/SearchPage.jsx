import  { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import SearchOptions from '../Components/Search/SearchOptions';
import SearchPageContent from '../Components/Search/SearchPageContent';

function SearchPage({ search }) {
  const [searchType, setSearchType] = useState('movie');
  const { collection, isLoading } = useFetch(
    `https://api.themoviedb.org/3/search/${searchType}?query=${search || ''}`
  );

  return (
    <>
      <SearchOptions setSearchType={setSearchType} />
      <SearchPageContent collection={collection} isLoading={isLoading} searchType={searchType} />
    </>
  );
}

SearchPage.propTypes = {
  search: PropTypes.string, 
};

export default SearchPage;

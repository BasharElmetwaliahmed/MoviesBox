/* eslint-disable react/prop-types */
import SlideMainComponent from "../Components/MainSlider/SlideMainComponent"

function SearchPage({searchResults,setSearchResults,setSearchType,searchType}) {
  const changeTypeHandler=(e)=>{
   setSearchType(e.target.value)
  }
  return (
   <>
                        <h2 className="text-6xl  font
        -semibold text-center pt-24">Search Page</h2>
        <select onChange={changeTypeHandler} name="type" id="type" className="mx-auto  block my-16 bg-black text-white px-5 opti py-1 rounded-md">
  <option value="movie">Movie</option>
  <option value="tv">Tv</option>
</select>
    <div className="grid container px-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-6 py-10">

        {searchResults && searchResults.map(movie=><SlideMainComponent type={searchType} setSearchResults={setSearchResults} key={movie.id} id={movie.id}/>)}
    </div></>
  )
}

export default SearchPage
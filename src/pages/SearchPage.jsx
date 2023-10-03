/* eslint-disable react/prop-types */
import useFetch from "../hooks/useFetch"
import ReactLoading from 'react-loading';
import { useState } from "react";
import SearchCard from "../Components/SearchCard";


function SearchPage({search}) {
  const [searchType,setSearchType] = useState('movie')
  const {collection,isLoading}=useFetch(`https://api.themoviedb.org/3/search/${searchType}?query=${search}`)
  const changeTypeHandler=(e)=>{
    setSearchType(e.target.value)

  }

  return (
   <>
                        <h2 className="text-6xl  font
        -semibold text-center pt-24">Search Page</h2>
        <select onChange={changeTypeHandler}  name="type" id="type" className="mx-auto  block my-16 bg-black text-white px-5 opti py-1 rounded-md">
  <option value="movie">Movie</option>
  <option value="tv">Tv</option>
</select>
   {!isLoading? <div className="grid container px-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-1 gap-6 py-10 items-center">

        {collection?.results.map(show=><SearchCard type={searchType} show={show}  key={show.id} id={show.id}/>)}

    </div>:<ReactLoading className="mx-auto align-middle justify-center justify-self-center" type={'spin'} color={'#ff007f'} height={50} width={50} />
}
</>
  )
}

export default SearchPage
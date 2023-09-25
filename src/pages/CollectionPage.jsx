/* eslint-disable react/prop-types */
import SlideMainComponent from "../Components/MainSlider/SlideMainComponent"
import Pagination from "../Components/Pagination"
import useFetch from "../hooks/useFetch"
import ReactLoading from 'react-loading';
import { useState } from "react";

function CollectionPage({path,title,type}) {
  const [currentPage,setCurrentPage]=useState(1)
  const {collection,isLoading}=useFetch(`https://api.themoviedb.org/3/${path}?page=${currentPage}`)

      const slides=collection &&collection.results.map((element,id)=><SlideMainComponent type={type} id={element.id} key={id}/>)

  return (
   <>
   
       <div className="container">
            <h2 className="text-6xl  font-semibold text-center pt-24">{title} Page</h2>


    </div>
      <div className="mx-auto">
        <div className="container grid gap-10 lg:grid-cols-4 md:grid-cols-3 py-14">
          {isLoading?	<ReactLoading type='spinner' color={'#ff007f '} height={60} width={60} />
:slides}
        </div>
      </div>
      <div className="my-16">
                             {collection? <Pagination pages={collection.total_pages>100?100 : collection.total_pages} currentPage={currentPage} setCurrentPage={setCurrentPage}/>:''}

      </div>
          </>

  )
}

export default CollectionPage
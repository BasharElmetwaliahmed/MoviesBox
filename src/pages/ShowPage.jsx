/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import starLogo from '../assets/imgs/Star.svg'
import useDetails from '../hooks/useDetails';
import CastComponent from '../Components/CastComponent';
import SliderMain from '../Components/MainSlider/SliderMain'
import {useLoaderData, useParams} from 'react-router-dom'
import TrailerModal from '../Components/TrailerModal';
import { useState } from 'react';
import VideosSection from '../Components/Movie/VideosSection';
import RelatedSection from '../Components/Movie/RelatedSection';
import ShowDetails from '../Components/ShowPage/ShowDetails';
import { async } from '@firebase/util';
import { options } from '../options';


function ShowPage({type}) {
//    const [showTrailer,setShowTrailer]=useState(false)
  const show=useLoaderData()
  const {show:currentShow,cast,recommendations,similar  } =useDetails(show.id,type)
  console.log(currentShow?currentShow:null)

//    const castComponent=cast &&cast.map(castmember=><CastComponent key={castmember.credit_id} name={castmember.character} role={castmember.known_for_department}
//              img={castmember.profile_path}/>)
 
//    const trailerId=currentShow &&currentShow.videos.length>1 && currentShow.videos.results.find(video=>video.name==="Official Trailer").key
   if(!currentShow) return null
             return (
        <>

    <div className="min-h-screen  bg-cover bg-fixed bg-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${show.backdrop_path})` }}>
              <div className="container mx-auto p-4">
                                 <ShowDetails show={currentShow} trailerId={null}/>
           
        </div>
      <div className="fixed inset-0 overflow-y-auto bg-opacity-80 bg-gray-900">
      </div>
    </div>

    

    {/* <div className='absolute top-0 left-0  bg-gradient-to-r z-0 from-gray-900 to-blue-950 opacity-80 backdrop-blur-lg w-full  h-full'></div>
    <div className=' relative z-10 py-44 container'> */}
        {/* <div className='text-center text-xl text-white'> */}
            {/* <h2 className='mb-8 text-6xl font-bold'>CAST</h2> */}
            {/* {<SliderMain  slides={castComponent}></SliderMain>} */}

        {/* </div> */}
         {/* <VideosSection videos={currentShow.videos.results.slice(0,6)} />


    </div>
    { showTrailer &&trailerId && <TrailerModal  trailerId={trailerId} closeModal={()=>{setShowTrailer(false)}}/>

}
    
    </div>
    <div  >
    <RelatedSection type={type} similar={similar} recommendations={recommendations}/>
    </div> */}




</>
)
}



export default ShowPage

export async function loader({request,params}){
    const url=request.url;
    const showId=params.showId;
    let type='movie'
    if (!url.includes("movies")) type='tv'
    const response= await fetch(`https://api.themoviedb.org/3/${type}/${showId}`,options)
    const data=await response.json();
    if(!response.ok){
        throw data
    }
    
    return data

}
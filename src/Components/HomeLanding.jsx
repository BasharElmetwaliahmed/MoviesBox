
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import { useEffect } from 'react';
import { useState } from 'react';
import HomeSlider from './HomeSlider';



function HomeLanding() {
    const Trending=useSelector(state=>state.api).trendingAll
    const isLoading=useSelector(state=>state.api).isLoading
    const [currentIndex,setCurrentIndex]=useState(0)
    useEffect(()=>{
  const changeImage=setInterval(()=>{

   if(currentIndex===4){
    setCurrentIndex(0)
   }
   else{
    setCurrentIndex(currentIndex+1)
   }
  },7000)

  return () => clearInterval(changeImage);
    },[currentIndex])
    
  return (
    <div> 
     {isLoading?
    <div className='w-screen h-screen fixed  top-0 flex items-center justify-center bg-black left-0 z-50'>
         <ReactLoading type={'spin'} color={'#ff007f'} height={50} width={50} />
    </div>:

        <HomeSlider Trending={Trending[currentIndex]} />
    
        }

   
    
  
    </div>
  )
}

export default HomeLanding
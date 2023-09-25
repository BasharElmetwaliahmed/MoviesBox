/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function App({slides}) {

  return (
    <div className='container '>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper"    breakpoints={{
    640: {
      width: 640,
      slidesPerView: 1,
    },
    768: {
      width: 768,
      slidesPerView: 2,
    },
    992:{
      width:992,
      slidesPerView:4,
    }
  }}       loop={true}
        spaceBetween={30}>
    {slides?slides.map((slide,id)=><SwiperSlide key={id}>{slide}</SwiperSlide>):''}       
       </Swiper>
    </div>
  );
}

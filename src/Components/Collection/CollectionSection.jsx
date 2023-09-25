/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-mixed-spaces-and-tabs */
import useFetch from '../../hooks/useFetch'
import seeMoreIcon from '../../assets/imgs/Chevron right.png'
import ReactLoading from 'react-loading';
import SliderMain from '../MainSlider/SliderMain';
import SlideMainComponent from '../MainSlider/SlideMainComponent';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryBox from './CategoryBox';

// show is movie or tv Series
//type is movie or tv

function CollectionSection({title,categories,data}) {
    const [category,setCategory]=useState({position:'left',type:categories[0].category})
    const {collection,isLoading}=useFetch(`https://api.themoviedb.org/3/${category.type}/${data}`)
    const slides=collection &&collection.results.map((element,id)=>{
    if(element.poster_path) return <SlideMainComponent type={category.type} id={element.id} key={id}/>
    }
    )

    const navigate=useNavigate()
    const conditionleft=category.position=='left'
  return (
    <div className='container py-20 px-3'>
    <div className='flex justify-between items-center mb-14 flex-wrap gap-6'>
   <h2 className='text-5xl font-semibold capitalize'>{title}</h2>
  <CategoryBox setCategory={setCategory} conditionleft={conditionleft} categories={categories}/>
  <button className='flex text-red-700 items-center text-lg' onClick={()=>{navigate(`/${category.type}/${data}`)}}>
    See More <img src={seeMoreIcon} /></button>
    </div>
      <div className='min-h-[500px] flex items-center justify-center'>
    {
      isLoading?
      	<ReactLoading type={'bubbles'} color={'#ff007f'} height={60} width={60} />:<SliderMain slides={slides}/> 
     }
     </div>      

    </div>
  )
}

export default CollectionSection
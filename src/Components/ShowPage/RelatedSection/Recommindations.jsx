/* eslint-disable react/prop-types */
import SlideMainComponent from "../../MainSlider/SlideMainComponent"
import SliderMain from '../../MainSlider/SliderMain'

function Recommindations({collection,type,title}) {
        const collectionSlide=collection && collection.results.filter(element=>{if(element.poster_path)return element})
        .map((element)=><SlideMainComponent type={type} id={element.id} key={element.id}/>)    
  return (
    <div>
                 {  collection?.results.length  ?
                  <div className=" ">
          <h4 className=" text-5xl py-8 lg:px-0 px-[3vw]  font-bold">{title}</h4>
                 <SliderMain slides={collectionSlide}/>
         </div>
         
      :""   }
    </div>
  )
}

export default Recommindations
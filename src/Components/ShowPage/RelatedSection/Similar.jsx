/* eslint-disable react/prop-types */
import SlideMainComponent from "../../MainSlider/SlideMainComponent"
import SliderMain from '../../MainSlider/SliderMain'
function Similar({similar,type}) {
            const similarSlide=similar && similar.results.filter(element=>{if(element.poster_path)return element}).map((element)=><SlideMainComponent type={type} id={element.id} key={element.id}/>)

  return (
    <div>
            { similar &&
         <div className="my-16 ">

          <h4 className=" text-5xl py-8 lg:px-0 px-[3vw] font-bold">Similar</h4>
                 <SliderMain slides={similarSlide}/>
         </div>}        
    </div>
  )
}

export default Similar
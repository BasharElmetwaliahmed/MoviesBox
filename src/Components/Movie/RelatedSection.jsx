/* eslint-disable react/prop-types */
import SlideMainComponent from "../MainSlider/SlideMainComponent"
import SliderMain from "../MainSlider/SliderMain"

function RelatedSection({similar,recommendations,type}) {
        const similarSlide=similar && similar.results.filter(element=>{if(element.poster_path)return element}).map((element)=><SlideMainComponent type={type} id={element.id} key={element.id}/>)
        const recommendationsSlide=recommendations && recommendations.results.filter(element=>{if(element.poster_path)return element})
        .map((element)=><SlideMainComponent type={type} id={element.id} key={element.id}/>)

        console.log(similarSlide)
  return (
    <div className="bg-white  py-16 container">
            <h2 className='mb-8 text-6xl font-bold text-center text-black my-14' >Related</h2>

            { similar &&
         <div className="my-16 ">

          <h4 className=" text-5xl py-8 lg:px-0 px-[3vw] font-bold">Similar</h4>
                 <SliderMain slides={similarSlide}/>
         </div>}

         {  recommendations?.results.length  ?
                  <div className=" ">
          <h4 className=" text-5xl py-8 lg:px-0 px-[3vw]  font-bold">Recommendations</h4>
                 <SliderMain slides={recommendationsSlide}/>
         </div>
         
      :""   }
    </div>
  )
}

export default RelatedSection
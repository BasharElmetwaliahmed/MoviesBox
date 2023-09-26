/* eslint-disable react/prop-types */
import Recommindations from "./Recommindations"

function RelatedSection({similar,recommendations,type}) {
        console.log(similar , recommendations)


  return (
    <div className="bg-white  py-16 container">
            <h2 className='mb-8 text-6xl font-bold text-center text-black my-14' >Related</h2>
           {similar.results.length==0 && recommendations.results.length==0 ?
           <p className="text-center mx-auto text-red-700 font-semibold text-lg">Not Found Related</p>:null} 
           <Recommindations collection={similar} type={type} title='similar'/>
           <Recommindations collection={recommendations} type={type} title='recommendations'/>
    </div>
  )
}

export default RelatedSection
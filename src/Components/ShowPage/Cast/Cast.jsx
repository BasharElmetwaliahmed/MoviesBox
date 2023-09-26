/* eslint-disable react/prop-types */
import SliderMain from '../../MainSlider/SliderMain'
import CastComponent from './CastComponent'
function Cast({cast}) {
       const castComponent=cast &&cast.map(castmember=><CastComponent key={castmember.credit_id} name={castmember.character} role={castmember.known_for_department}
             img={castmember.profile_path}/>)
  if(!cast.length>0) return;          
  return (
             <div className='text-center container text-xl text-white relative z-10 my-14'> 
             <h2 className='mb-8 text-6xl font-bold text-white'>CAST</h2> 
             <SliderMain  slides={castComponent}></SliderMain>

        </div>
  )
}

export default Cast
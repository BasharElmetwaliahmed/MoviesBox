/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import ShowCardHeader from './ShowCardHeader';
import ShowContent from './ShowContent';

// eslint-disable-next-line react/prop-types
function ShowCard({id,type,show}) {
    const navigate=useNavigate()

   const clickHandler=()=>{
    if(type=='movie')
    navigate(`/movies/${id}`)
    else{
      navigate(`/tvseries/${id}`)
    }
   }
if(!show) return ;
  return (
 <div className='flex flex-col'>
  <ShowCardHeader show={show} id={id} type={type} clickHandler={clickHandler}/>
  <ShowContent show={show} type={type}   clickHandler={clickHandler}/>  
</div>
  )
}

export default ShowCard
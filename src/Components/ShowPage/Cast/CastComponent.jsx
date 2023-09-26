/* eslint-disable react/prop-types */
import nullImg from '../../../assets/imgs/resize_7617896 (1).png'
function CastComponent({name,img,role}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <img src={img?`https://image.tmdb.org/t/p/original${img}`: nullImg}
         alt='character img  ' className="mb-3 w-56 h-56 rounded-full" />
         <h4 className="text-center text-xl text-white font-bold">{name}</h4>
         <p className="text-gray-500">{role}</p>
    </div>
  )
}

export default CastComponent
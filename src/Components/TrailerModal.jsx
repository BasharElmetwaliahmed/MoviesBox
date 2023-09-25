/* eslint-disable react/prop-types */

function TrailerModal({closeModal,trailerId}) {


  return (
   <div className='fixed top-0 left-0 w-screen h-screen  flex justify-center items-center z-50'>
      <iframe className='relative z-[51] w-[95vw] md:w-1/2 md:h-1/2  h-1/2 ' src={`https://www.youtube.com/embed/${trailerId}`}></iframe>

  <button className='z-[51] absolute right-[10vw] text-white top-[5vh] text-4xl ' onClick={closeModal}>X</button>
   <div className='absolute top-0 left-0 w-full h-full bg-gray-950 bg-opacity-60'  onClick={closeModal}></div>
   </div>
  )
}

export default TrailerModal
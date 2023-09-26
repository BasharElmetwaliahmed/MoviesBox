/* eslint-disable react/prop-types */

function VideosSection({videos}) {
  const videoFrame=videos.map(video=><iframe key={video.key} className='relative z-[10] w-full h-[300px] ' src={`https://www.youtube.com/embed/${video.key}`}/>)
  if(!videoFrame.length) return null
  return (
    <div className="relative z-10 my-14">
            <h2 className='mb-8 text-6xl font-bold text-center text-white my-7' >Extra Videos</h2>
            <div className='lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 grid px-4 py-6'>
              {videoFrame}
            </div> 
    </div>
  )
}

export default VideosSection
/* eslint-disable react/prop-types */

function CategoryBox({categories,conditionleft,setCategory}) {
  return (
 <>
 {categories.length==2 && categories && <div className='flex gap-4 order-3 md:order-none mx-auto    bg-white border-[1px] border-gray-800 relative text-black text-center py-3 px-6 rounded-full font-semibold'>
    <button className={`px-2 w-[100px] ${conditionleft? 'text-white':''} transition-all duration-300 relative z-10`} onClick={()=>setCategory({type:categories[0].category,position:'left'})}>{categories[0].categoryTitle}</button>
    <button className={`px-2 w-[100px]  ${!conditionleft? 'text-white':''}  transition-all duration-300 relative z-10`} onClick={()=>setCategory({type:categories[1].category,position:'right'})}>{categories[1].categoryTitle}</button>
    <span className={`absolute transition-all duration-500 left-0 ${conditionleft?'':' translate-x-full'} top-0 w-1/2 h-full rounded-full  bg-gradient-to-r from-green-400 to-blue-500  `}></span>
   </div>}
 </>
    )
}

export default CategoryBox
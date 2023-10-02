import { useState } from 'react';
import {  useSelector,useDispatch} from 'react-redux';
import { signOut } from '../Redux/Services/userSlice/UserSlice';

function UserComponent() {
    const user=useSelector(state=>state.user)
    const [showModal,setShowModal]=useState(false)
    const dispatch=useDispatch()
   
  return (
   <>
       <div className='relative' onMouseEnter={()=>setShowModal(true)} onMouseLeave={()=>setShowModal(false)}>
        <img src={user.user.photoURL} alt='userimg' className='w-[50px] rounded-full'/>
        <div className={`absolute w-[200px] bg-white text-gray-900 left-1/2 -translate-x-1/2
         rounded-lg -bottom-28 transition-all duration-500 ${!showModal?'invisible opacity-0':'opacity-100'} ` }>
          <p className='text-center py-2'>Hello Bashar</p>
          <button onClick={()=>dispatch(signOut())} className='w-full bg-red-600 text-white border-none py-3 rounded-b-lg hover:opacity-50 transition-all duration-300'>Log Out</button>
          <span className='absolute top-0 left-1/2  -translate-x-1/2 -translate-y-full arrow-up  '></span>
        </div>
       </div>

   </>
     )
}

export default UserComponent
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { signInAction } from '../../Redux/Services/userSlice/signInAction'
import tabIcon from '../../assets/imgs/Menu alt 4.svg'
import UserComponent from './UserComponent';

function ControlHeader({setShowNav}) {
    const dispatch=useDispatch()
    const user=useSelector(state=>state.user).user;
  return (
    <>
        <div className='flex w-fit gap-5 lg:py-0 py-2 justify-center font-semibold'>
           {!user? <button className='text-white' onClick={()=>dispatch(signInAction())}>Sign in</button>:<UserComponent/>}
            <button className='bg-rose-700 w-fit p-3 rounded-full  shadow-lg' onClick={()=>{setShowNav(showNav=>!showNav)}}>
                <img src={tabIcon} alt='tab icon'/>
            </button>
        </div>    
    </>
  )
}

export default ControlHeader
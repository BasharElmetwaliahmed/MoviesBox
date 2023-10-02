import logo from '../assets/imgs/Logo.png'
import searchIcon from '../assets/imgs/Search.svg'
import tabIcon from '../assets/imgs/Menu alt 4.svg'
import { useState } from 'react'
import { useRef } from 'react'
import { options } from '../options'
import Nav from './Nav/Nav'
import { useDispatch ,useSelector} from 'react-redux';
import { logIn } from '../Redux/Services/userSlice/UserSlice'
import UserComponent from './UserComponent'
import { useEffect } from 'react'

let init=0
function Header({}) {
    // const [loading,setLoading]=useState('')
    const [showNav,setShowNav]=useState(false)
    // const dispatch=useDispatch()
    // const user=useSelector(state=>state.user)
    // const searchRef=useRef()
    // const fetchSearch=async(keyword)=>{
    //     setLoading(true)
  //  const response=await fetch(`https://api.themoviedb.org/3/search/${searchType}?query=${keyword}`, options)
  //  const data=await response.json()
        // setLoading(false)
      // }
  //  const  onChangeSearchHandler=()=>{
  //       const keyword=searchRef.current.value;
  //        if(keyword.trim()===''){
  //         return
  //        }
  //       fetchSearch(keyword)
      

  //   }
  //   useEffect(()=>{
  //   if(init){
  //     fetchSearch(searchRef.current.value)
  //   }
  //   init=1
  //   },[])

  return (
  <>
    <Nav showNav={showNav}></Nav>
    <div className='relative py-5 px-2 z-10 bg-gray-900 '>
        <div className='container flex justify-between  lg:gap-0 gap-3  items-center relative  flex-wrap z-10'>
        <img src={logo} alt='logo ' className=' w-fit'  />
        <div className='relative w-full lg:w-1/2 border-2 order-last lg:order-none  border-white rounded-md'>
            <input type='text'  placeholder='What do you want to watch?' className='w-full bg-transparent p-2 text-white rounded-lg'/>
            <img src={searchIcon} alt='search icon' className='absolute right-2 top-1/2 -translate-y-1/2'/>
        </div>
        <div className='flex w-fit gap-5 lg:py-0 py-2 justify-center font-semibold'>
            <button className='text-white'>Sign in</button>
            <button className='bg-rose-700 w-fit p-3 rounded-full  shadow-lg' onClick={()=>{setShowNav(!showNav)}}>
                <img src={tabIcon} alt='tab icon'/>
            </button>
        </div>
    </div> 
  </div>
  </>
  )
}

export default Header
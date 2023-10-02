import logo from '../../assets/imgs/Logo.png'
import { useState } from 'react'
import Nav from '../Nav/Nav'
import ControlHeader from './ControlHeader'
import Search from './Search'


function Header() {
    const [showNav,setShowNav]=useState(false)


  return (
  <>
    <Nav showNav={showNav}></Nav>
    <div className='relative py-5 px-2 z-10 bg-gray-900 '>
        <div className='container flex justify-between  lg:gap-0 gap-3  items-center relative  flex-wrap z-10'>
        <img src={logo} alt='logo ' className=' w-fit'  />
        <Search/>
        <ControlHeader setShowNav={setShowNav}/>
    </div> 
  </div>
  </>
  )
}

export default Header
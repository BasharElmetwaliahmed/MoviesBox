import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { Outlet, useLoaderData } from "react-router-dom"
import { setUser } from "../../Redux/Services/userSlice/UserSlice";
import Header from "../Header/Header"

function Layout() {
  const dispatch=useDispatch();
  const user=useLoaderData();
  useEffect(()=>{
    if(user)
   dispatch(setUser(user))
  },[])
  return (
    <>
    <Header/>
    <Outlet/> 
    </>
  )
}

export default Layout
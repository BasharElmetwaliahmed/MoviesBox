import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLoaderData } from "react-router-dom"
import SearchPage from "../../pages/SearchPage";
import { setUser } from "../../Redux/Services/userSlice/UserSlice";
import { setWatchList } from "../../Redux/Services/WatchListSlice/WatchListSlice";
import { getWatchList } from "../functions/getWatchList";
import Header from "../Header/Header"



function Layout() {
  const dispatch=useDispatch();
  const [search,setSearch]=useState('')
  const user=useLoaderData();
  const userData=useSelector(state=>state.user)

      const checkUser=async(user)=>{
      const data=await getWatchList(user)
       dispatch(setWatchList(data))
    }
  useEffect(()=>{

    if(user){
      checkUser(user)
      dispatch(setUser(user))

    }
  },[])

  useEffect(()=>{
   if(userData.token){
    checkUser(userData.user)
   }
  },[userData])
  return (
    <>

    <Header setSearch={setSearch}/>
    {search.length?<SearchPage search={search}/>:
    <Outlet/> }
    </>
  )
}

export default Layout
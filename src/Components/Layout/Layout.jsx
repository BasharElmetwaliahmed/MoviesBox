import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLoaderData } from "react-router-dom"
import { db } from "../../firebase";
import { setUser } from "../../Redux/Services/userSlice/UserSlice";
import { setWatchList } from "../../Redux/Services/WatchListSlice/WatchListSlice";
import Header from "../Header/Header"

const getWatchList=async(userData)=>{
  
const docRef = doc(db, "watchList", userData.user.uid);
const docSnap = await getDoc(docRef);
console.log(docSnap.data().watchlist)
return docSnap.data().watchlist

}

function Layout() {
  const dispatch=useDispatch();
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
    <Header/>
    <Outlet/> 
    </>
  )
}

export default Layout
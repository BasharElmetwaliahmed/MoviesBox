import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from "react"
import { Routes, Route,  } from 'react-router-dom';

import {getTrendingAll} from './Redux/Services/ApiSlice'
import Header from './Components/Header';
import { useState } from 'react';
import SearchPage from './pages/SearchPage';
import Home from './pages/Home';
import MoviesPage from './pages/MoviesPage';
import TvSeriesPage from './pages/TvSeriesPage';
import CollectionPage from './pages/CollectionPage';
import NotFound from './pages/NotFound';
import WatchList from './pages/WatchList';
import LoginForm from './pages/LoginForm';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from './firebase';
import { setUser } from './Redux/Services/UserSlice';
import ShowPage from './pages/ShowPage';
let userExist=localStorage.getItem('user')
// Add a new document in collection "cities"
const setData=async(data,uid)=>{ await setDoc(doc(db, "watchList",uid),{watchlist:data});}
let initial=0
function App() {
  const [searchType,setSearchType]=useState('movie')
  const dispatch=useDispatch()
  const watchList =useSelector(state=>state.watchlist).watchList
  const user=useSelector(state=>state.user).user
  const [searchResults,setSearchResults]=useState([])
  const collectionPages=[{
    path:'movie/popular',
    title:'Popular',
    type:'movie'
              },

              {
    path:'movie/top_rated',
    title:'Top Rated',
    type:'movie'

              },
              {
    path:'movie/now_playing',
    title:'Now Playing',
    type:'movie'

              },
              {
    path:'movie/upcoming',
    title:'Upcoming',
    type:'movie'

              },
              {
    path:'tv/airing_today',
    title:'Airing Today',
    type:'tv'

              },
              {
    path:'tv/on_the_air',
    title:'On The Air',
    type:'tv'
            
              },
              {
    path:'tv/top_rated',
    title:'Top Rated',
    type:'tv'
            
              },
              {
    path:'tv/popular',
    title:'Popular',
        type:'tv'


              }              


]

  useEffect(()=>{
    dispatch(getTrendingAll())
    if(userExist){
      const user=JSON.parse(localStorage.getItem('user'))
    dispatch(setUser(user))
    }
    initial++
  },[])
  useEffect(()=>{
    if(user && initial){
      setData(watchList,user.uid)
    }
  },[watchList])
  return (
    <div className="">
      
      <Header setSearchResults={setSearchResults} searchType={searchType}/>

      {
        searchResults.length?
        <SearchPage searchResults={searchResults} setSearchType={setSearchType} searchType={searchType} setSearchResults={setSearchResults}/>:
              <Routes>
        {collectionPages.map((page,id)=><Route key={id} path={page.path} element={<CollectionPage title={page.title} type={page.type} path={page.path}/>}/>)}
        <Route path='/' element={<Home/>}/>
        <Route path='/movie' element={<MoviesPage/>}/>
        <Route path='/tv' element={<TvSeriesPage/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='*' element={<NotFound />}/>
        <Route path="movies/:showId" element={<ShowPage type='movie'/>} />
        <Route path="tvseries/:showId" element={<ShowPage type='tv'/>} />
         </Routes>
      
      
      
      }



   

    </div>
  )
}

export default App
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import CollectionSection from "../Components/Collection/CollectionSection"
import HomeLanding from "../Components/HomeLanding"
import { getTrendingAll } from "../Redux/Services/ApiSlice"
function Home() {
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(getTrendingAll())
  },[])
  return (
    <div>
        <HomeLanding/>
        <CollectionSection  data='popular' title={'popular'}  categories={[{categoryTitle:'Movies', category:'movie'},{categoryTitle:'Tv Show', category:'tv'}]} />
        <CollectionSection data='top_rated' title={'Top Rated'} categories={[{categoryTitle:'Movies', category:'movie'},{categoryTitle:'Tv Show', category:'tv'}]}  />



    </div>
  )
}

export default Home
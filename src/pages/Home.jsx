import CollectionSection from "../Components/Collection/CollectionSection"
import HomeLanding from "../Components/HomeLanding"
function Home() {
  return (
    <div>
        <HomeLanding/>
        <CollectionSection  data='popular' title={'popular'}  categories={[{categoryTitle:'Movies', category:'movie'},{categoryTitle:'Tv Show', category:'tv'}]} />
        <CollectionSection data='top_rated' title={'Top Rated'} categories={[{categoryTitle:'Movies', category:'movie'},{categoryTitle:'Tv Show', category:'tv'}]}  />



    </div>
  )
}

export default Home
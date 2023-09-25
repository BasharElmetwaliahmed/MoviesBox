import CollectionSection from '../Components/Collection/CollectionSection'

function TvSeriesPage() {
        const collections=[
        {
            data:'airing_today',
            title:'airing today',
        },
        {
            data:'on_the_air',
            title:'on the air ',
        },
       {
            data:'popular',
            title:'popular',
        },
        {
            data:'top_rated',
            title:'top rated'
        }

    ]
  return (
    <div>        <h2 className="text-6xl  font-semibold text-center pt-24">Tv Series Page</h2>
        {collections.map((collection,id)=><CollectionSection key={id} data={collection.data} title={collection.title}  categories={[{categoryTitle:'Tv Series', category:'tv'}]}/>)}</div>
  )
}

export default TvSeriesPage
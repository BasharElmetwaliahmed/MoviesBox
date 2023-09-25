import CollectionSection from "../Components/Collection/CollectionSection"

function MoviesPage() {
    const collections=[
        {
            data:'popular',
            title:'popular',
        },
        {
            data:'top_rated',
            title:'top rated',
        },
       {
            data:'upcoming',
            title:'upcoming',
        },
        {
            data:'now_playing',
            title:'now playing'
        }

    ]
  return (
    <div>
        <h2 className="text-6xl  font
        -semibold text-center pt-24">Movies Page</h2>
        {collections.map((collection,id)=><CollectionSection key={id} data={collection.data} title={collection.title}  categories={[{categoryTitle:'Movies', category:'movie'}]}/>)}
    </div>
  )
}

export default MoviesPage
/* eslint-disable react/prop-types */
import ShowDetails from '../Components/ShowPage/ShowDetails/ShowDetails';
import Cast from '../Components/ShowPage/Cast/Cast';
import VideosSection from '../Components/Movie/VideosSection';
import RelatedSection from '../Components/ShowPage/RelatedSection/RelatedSection';
import { options } from '../options';
import { useLoaderData } from 'react-router-dom';
import useDetails from '../hooks/useDetails';



function ShowPage({ type }) {
  const show = useLoaderData();
  const { show: currentShow, cast, recommendations, similar } = useDetails(show.id, type);

  if (!currentShow) return null;

  const backgroundUrl = `url(https://image.tmdb.org/t/p/original${show.backdrop_path})`;

  return (
    <>
      <div className="min-h-screen relative bg-cover bg-fixed bg-center" style={{ backgroundImage: backgroundUrl }}>
        <div className="container mx-auto p-4">
          <ShowDetails show={currentShow} />
          {cast && <Cast cast={cast} />}
          <VideosSection videos={currentShow.videos.results.slice(0, 6)} />
        </div>
        <div className="absolute w-full h-full inset-0 overflow-y-auto bg-opacity-80 bg-gray-900"></div>
      </div>
      <div>{recommendations && similar && <RelatedSection type={type} similar={similar} recommendations={recommendations} />}</div>
    </>
  );
}

export default ShowPage;



async function fetchData(type, showId) {
  const response = await fetch(`https://api.themoviedb.org/3/${type}/${showId}`, options);
  if (!response.ok) {
    throw await response.json();
  }
  return await response.json();
}




export async function loader({ request, params }) {
  const url = request.url;
  const showId = params.showId;
  const type = url.includes("movies") ? 'movie' : 'tv';
  return fetchData(type, showId);
}

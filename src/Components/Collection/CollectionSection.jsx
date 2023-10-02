/* eslint-disable react/prop-types */
import  { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import ReactLoading from 'react-loading';
import SliderMain from '../MainSlider/SliderMain';
import ShowCard from '../ShowCard.jsx/ShowCard';
import CollectionHeader from './CollectionHeader';

function CollectionSection({ title, categories, data }) {
  const initialCategory = categories[0].category;
  const [category, setCategory] = useState({ position: 'left', type: initialCategory });
  const { collection, isLoading } = useFetch(`https://api.themoviedb.org/3/${category.type}/${data}`,category);
  const slides = collection?.results
    ?.filter((element) => element.poster_path)
    .map((element, id) => <ShowCard type={category.type} id={element.id} key={id} /> );
  return (
    <div className="container py-20 px-3">
      <CollectionHeader
        setCategory={setCategory}
        categories={categories}
        category={category}
        title={title}
        data={data}
      />
      <div className="min-h-[500px] flex items-center justify-center">
        {isLoading? (
          <ReactLoading type="bubbles" color="#ff007f" height={60} width={60} />
        ) : (
          <SliderMain slides={slides} />
        )}
      </div>
    </div>
  );
}

export default CollectionSection;

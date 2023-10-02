/* eslint-disable react/prop-types */
import seeMoreIcon from '../../assets/imgs/Chevron right.png';
import { useNavigate } from 'react-router-dom';
import CategoryBox from './CategoryBox';

function CollectionHeader({ title, setCategory, categories, category, data }) {
  const navigate = useNavigate();
  const conditionLeft = category.position === 'left';

  return (
    <div className='flex justify-between items-center mb-14 flex-wrap gap-6'>
      <h2 className='text-5xl font-semibold capitalize'>{title}</h2>
      <CategoryBox setCategory={setCategory} conditionleft={conditionLeft} categories={categories} />
      <button className='flex text-red-700 items-center text-lg' onClick={() => navigate(`/${category.type}/${data}`)}>
        See More <img src={seeMoreIcon} alt='See More' />
      </button>
    </div>
  );
}

export default CollectionHeader;

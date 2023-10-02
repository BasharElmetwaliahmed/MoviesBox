import searchIcon from '../../assets/imgs/Search.svg'
function Search() {
  return (
            <div className='relative w-full lg:w-1/2 border-2 order-last lg:order-none  border-white rounded-md'>
            <input type='text'  placeholder='What do you want to watch?' className='w-full bg-transparent p-2 text-white rounded-lg'/>
            <img src={searchIcon} alt='search icon' className='absolute right-2 top-1/2 -translate-y-1/2'/>
        </div>
  )
}

export default Search
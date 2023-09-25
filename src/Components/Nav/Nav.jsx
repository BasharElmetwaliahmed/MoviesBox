import { NavLink } from "react-router-dom"

function Nav({showNav}) {
  const Links=[{
    path:'/',
    title:'Home'
  },
  {
    path:'/tv',
    title:'Tv Series'
  },
  {
    path:'/movie',
    title:'Movies'
  },
  {
    path:'/watchlist',
    title:'Favourite List'
  }

]
  return (
    <div className={` absolute z-[9]  left-0 ${showNav?'lg:translate-y-[90px]  translate-y-[162px]':'translate-y-0'} transition-all duration-300 w-full bg-gray-800 font-bold  text-white py-4`}>
      <nav className="flex container justify-evenly list-none " >
        {
          Links.map(link=><li className="hover:text-red-700 transition-all duration-300" key={link.path}><NavLink to={link.path}>{link.title}</NavLink></li>)
        }

      </nav>

    </div>
  )
}

export default Nav
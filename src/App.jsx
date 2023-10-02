import {  createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import Home from './pages/Home';
import MoviesPage from './pages/MoviesPage';
import TvSeriesPage from './pages/TvSeriesPage';
import  {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import ShowPage ,{loader as showLoader} from './pages/ShowPage';
import Layout from './Components/Layout/Layout';
import WatchList from './pages/WatchList';
import { authLoader, checkUserLoader } from './auth/authutil';
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    loader:checkUserLoader,
    children:[
      {
        index:true,
        path:'',
        element:<Home/>
      },
      {
        path:'movies',
        element:<MoviesPage/>,
        children:[
          {
            path:':showId',
            element:<ShowPage  type='movie'/>,
            loader:showLoader
          }
        ]
      },
      {
        path:'tvseries',
        element:<TvSeriesPage/>,
        children:[
          {
            path:':showId',
            element:<ShowPage  type='tv'/>,
            loader:showLoader
          }
        ]
      },      
      {
        path:'watchlist',
        element:<WatchList/>,
        loader:authLoader
      }

    ]
  }
])
function App() {

  return (
    <>
    <RouterProvider router={router}/>
    <ToastContainer/>
    </>

  )
}

export default App
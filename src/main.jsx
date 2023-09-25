import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx'
import './index.css'
import store from '../src/Redux/index'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
   <BrowserRouter>
         <React.StrictMode>
    <App />
  </React.StrictMode></BrowserRouter>


  </Provider>
,
)

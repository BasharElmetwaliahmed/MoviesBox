import { configureStore } from '@reduxjs/toolkit';
import  { apiReducer } from "./Services/ApiSlice"
import { userReducer } from './Services/UserSlice';
import { watchListReducer } from './Services/WatchListSlice';

export default configureStore({ reducer: { api:apiReducer,
 watchlist:watchListReducer,
 user:userReducer
 } });
import { configureStore } from '@reduxjs/toolkit';
import  { apiReducer } from "./Services/ApiSlice"
import { userReducer } from './Services/userSlice/UserSlice';
import { watchListReducer } from './Services/WatchListSlice/WatchListSlice';

export default configureStore({ reducer: { api:apiReducer,
 watchlist:watchListReducer,
 user:userReducer
 } });
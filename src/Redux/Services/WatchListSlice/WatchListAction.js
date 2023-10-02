/* eslint-disable no-undef */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, setDoc } from 'firebase/firestore';
import {  db } from '../../../firebase';

export const UpdateWatchList = createAsyncThunk('watchlist/updatewatchlist', async (data, { rejectWithValue }) => {
  console.log(data)
  try {

    await setDoc(doc(db, "watchList", data.uid), {watchlist:[...data.watchlist]});
    return data.watchlist


  } catch (error) {
    return rejectWithValue(error);
  }
});

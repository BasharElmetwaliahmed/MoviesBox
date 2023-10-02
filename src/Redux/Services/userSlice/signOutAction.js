import { createAsyncThunk } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';
import { redirect } from 'react-router-dom';
import { auth } from '../../../firebase';

export const signOutAction = createAsyncThunk('user/signout', async (_, { rejectWithValue }) => {
  try {
    
   await signOut(auth)
   return redirect('/')
  } catch (error) {
    return rejectWithValue(error);
  }
});

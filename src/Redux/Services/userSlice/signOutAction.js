import { createAsyncThunk } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

export const signOutAction = createAsyncThunk('user/signout', async (_, { rejectWithValue }) => {
  try {
    
   await signOut(auth)
   return location.reload()
  } catch (error) {
    return rejectWithValue(error);
  }
});

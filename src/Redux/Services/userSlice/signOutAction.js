import { createAsyncThunk } from '@reduxjs/toolkit';
import { signOut } from 'firebase/auth';
import { auth } from '../../../firebase';

export const signOutAction = createAsyncThunk('user/signout', async (_, { rejectWithValue }) => {
  try {
    // This gives you a Google Access Token. You can use it to access the Google API.
    await signOut(auth);
  } catch (error) {
    return rejectWithValue(error);
  }
});

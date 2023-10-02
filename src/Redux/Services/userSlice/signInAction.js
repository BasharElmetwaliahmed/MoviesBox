import {  createAsyncThunk } from '@reduxjs/toolkit'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../../firebase';

export const signInAction=createAsyncThunk(  'user/login',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
const provider = new GoogleAuthProvider();
 try{
    const result= await signInWithPopup(auth, provider)
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential =await  GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    return JSON.stringify({
        user:user,
        token:token
    })}
 
  catch(error) {
    rejectWithValue(error)
  }
})
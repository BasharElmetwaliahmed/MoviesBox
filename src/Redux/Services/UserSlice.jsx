import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase';

export const logIn=createAsyncThunk(  'user/login',
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
   console.log(error)
    rejectWithValue(error)
  }
})



export const signOut=createAsyncThunk('user/signout',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
 try{
    // This gives you a Google Access Token. You can use it to access the Google API.
    const response=await signOut(auth)
    console.log(response)
 
 }
  catch(error) {
    rejectWithValue(error)
  }
})
  

  const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        token:null,
        isAuthenticated:false,
        error:null
    },
        extraReducers:{
      [logIn.fulfilled]:(state,action)=>{

        const data= JSON.parse(action.payload)
         state.user=data.user
         state.token=data.token
         state.isAuthenticated=true
         state.error=null

         localStorage.setItem('user',JSON.stringify({
          user:state.user,
          token:state.token
         }))
      },
       
    
    [signOut.fulfilled]:(state,action)=>{
        state.user=null;
        state.token=null;
        state.isAuthenticated=false;
        state.error=null;
        localStorage.clear()
    }
    
    },
        reducers:{
        setUser:(state,action)=>{
        const data=action.payload
         state.user=data.user
         state.token=data.token
         state.isAuthenticated=true
         state.error=null
        },

      }
  })


  export const userReducer=userSlice.reducer
  export const {setUser,logOut}=userSlice.actions
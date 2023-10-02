import { createSlice } from '@reduxjs/toolkit'
import { signOutAction } from './signOutAction'
import { signInAction } from './signInAction'
import toastify from '../../../Components/functions/toast'






  const userSlice=createSlice({
    name:'user',
    initialState:{
        user:null,
        token:null,
        isAuthenticated:false,
        error:null
    },
        extraReducers:{
      [signInAction.fulfilled]:(state,action)=>{

        const data= JSON.parse(action.payload)
         state.user=data.user
         state.token=data.token
         state.isAuthenticated=true
         state.error=null

         localStorage.setItem('user',JSON.stringify({
          user:state.user,
          token:state.token
         }))
         toastify('logged in successfully','success')
      },
       
    
    [signOutAction.fulfilled]:(state)=>{
        state.user=null;
        state.token=null;
        state.isAuthenticated=false;
        state.error=null;
        localStorage.clear()
         toastify('logged out successfully','success')

        
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
import { createSlice } from '@reduxjs/toolkit';

const trySlice=createSlice({
 name:'try',
 initialState:{
    myarray:[]
 },
 reducers:{
    clickhandler:(state,action)=>{
        console.log(action.payload)
    }
 }
})
export const tryReducer=trySlice.reducer

export const {clickhandler}=trySlice.actions
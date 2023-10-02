import { createSlice } from '@reduxjs/toolkit'
import toastify from '../../../Components/functions/toast';
import { UpdateWatchList } from './WatchListAction';



const WatchListSlice=createSlice({
    name:'watchlist',
    initialState:{
        watchList:[]
    },
    extraReducers:(builder)=>{
     builder.addCase(UpdateWatchList.fulfilled, (state, action) => {
        state.watchList=action.payload
        toastify('WatchList updated Succesfully', 'success');
      })

    },
    reducers:{
      setWatchList:(state,action)=>{
        state.watchList=action.payload
      }
    }

})
export const watchListReducer=WatchListSlice.reducer
export const {setWatchList}=WatchListSlice.actions
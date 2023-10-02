import { createSlice } from '@reduxjs/toolkit'



const WatchListSlice=createSlice({
    name:'watchlist',
    initialState:{
        watchList:[]
    },
    reducers:{
        addToWatchList:(state,action)=>{
            state.watchList.push(action.payload)
        },
        removeFromWatchList:(state,action)=>{
            state.watchList=state.watchList.filter(element=>element.id !==action.payload)

        }
    }

})
export const watchListReducer=WatchListSlice.reducer
export const {addToWatchList,removeFromWatchList}=WatchListSlice.actions
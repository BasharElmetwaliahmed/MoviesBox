import { createSlice } from '@reduxjs/toolkit'



const WatchListSlice=createSlice({
    name:'watchlist',
    initialState:{
        watchList:[]
    },
    reducers:{
        addToWatchList:(state,action)=>{
            console.log(action.payload)
            state.watchList.push(action.payload)
            console.log(state.watchList)
        },
        removeFromWatchList:(state,action)=>{
            state.watchList=state.watchList.filter(element=>element.id !==action.payload)
                        console.log(state.watchList)

        }
    }

})
export const watchListReducer=WatchListSlice.reducer
export const {addToWatchList,removeFromWatchList}=WatchListSlice.actions
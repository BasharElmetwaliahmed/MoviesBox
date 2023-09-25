import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGVhZjFkZjJhZDc1MGEwOGRlZGQzMDI0ZDUzYWNiNSIsInN1YiI6IjY0NDBhNTJhZDM1ZGVhMDRkOWZhMDgxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4r4Iz_RxRmNzJFjHG7fEYV8K4JOLVfvTepy6OLsBRkg'
  }
};


export const getTrendingAll = createAsyncThunk(
  'api/allTrending',
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {


const response=await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  const data=await response.json()
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const initialState={
    trendingAll:[],
    isLoading:true,
}
const apiSlice=createSlice({
    name:'api',
    initialState,
    extraReducers:{
        //set Loading while get All trending Movies
        [getTrendingAll.pending]:(state)=>{
          console.log('pending')
        state.isLoading=true
        },

        //get all trending movies and series
        [getTrendingAll.fulfilled]:(state,{payload})=>{
            
            state.trendingAll=payload.results
            state.isLoading=false
        },

            
    }

})

export const apiReducer=  apiSlice.reducer
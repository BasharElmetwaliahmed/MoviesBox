import { createSlice } from '@reduxjs/toolkit';
import { signOutAction } from './signOutAction';
import { signInAction } from './signInAction';
import toastify from '../../../Components/functions/toast';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const data = action.payload;
      state.user = data.user;
      state.token = data.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      localStorage.clear();
      toastify('Logged out successfully', 'success');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAction.fulfilled, (state, action) => {
        const data = JSON.parse(action.payload);
        state.user = data.user;
        state.token = data.token;
        state.isAuthenticated = true;
        state.error = null;
        localStorage.setItem('user', JSON.stringify({ user: state.user, token: state.token }));
        toastify('Logged in successfully', 'success');
      })
      .addCase(signOutAction.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        localStorage.clear();
        toastify('Logged out successfully', 'success');
      });
  },
});

export const { setUser, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;

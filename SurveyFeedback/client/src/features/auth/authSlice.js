import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const AUTH_URL = '/api/user';

const initialState = { value: {}, status: 'idle', error: '' };

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
  const response = await axios.get(AUTH_URL);
  return response?.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuth.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('async reducer ran');
        console.log(action.payload);
        state.value = action.payload;
      })
      .addCase(fetchAuth.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectAuth = (state) => state.auth.value;
export const getAuthError = (state) => state.auth.error;
export const getAuthStatus = (state) => state.auth.status;
export default authSlice.reducer;

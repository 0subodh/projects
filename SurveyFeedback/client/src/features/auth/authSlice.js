import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: false };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth(state) {
      state.value = state.value ? false : true;
    },
  },
});

export const { changeAuth } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  sidebarVisibility: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = [...state.data, action.payload];
    },
    resetData(state) {
      state.data = [];
    },
    setSidebarVisibility(state, action) {
      state.sidebarVisibility = action.payload;
    },
  },
});

export const { setData, setSidebarVisibility, resetData } = cartSlice.actions;
export default cartSlice.reducer;
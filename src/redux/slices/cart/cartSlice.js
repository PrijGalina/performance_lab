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
    setSidebarVisibility(state, action) {
      state.showSidebar = action.payload;
    },
  },
});

export const { setData, setSidebarVisibility } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getData(state, action) {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { getData } = cartSlice.actions;
export default cartSlice.reducer;
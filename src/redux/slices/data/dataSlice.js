import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    fetchDataRequest(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    fetchDataFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataSuccess, fetchDataFailure, fetchDataRequest } = dataSlice.actions;
export default dataSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { SORT_TYPES, PRODUCTS_ON_PAGE } from "../../../constants";

const initialState = {
  num_page: 1,
  total_loaded: 0,
  limit: PRODUCTS_ON_PAGE,
  sort_param: SORT_TYPES.ByPrice,
  sort_value: SORT_TYPES.ByAsc
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeNumberPage: (state, action) => {
      state.num_page = action.payload;
    },
    changeSortParam: (state, action) => {
      state.sort_param = action.payload;
    },
    changeSortValue: (state, action) => {
      state.sort_value = action.payload;
    },
    changeLimit: (state, action) => {
      state.limit = action.payload;
    },
    changeTotalLoaded: (state, action) => {
      state.total_loaded = action.payload;
    },
  },
});

export const { changeNumberPage, changeSortParam, changeSortValue, changeLimit, changeTotalLoaded } = mainSlice.actions;
export default mainSlice.reducer;
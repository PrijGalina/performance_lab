import { createSlice } from '@reduxjs/toolkit';
import { SORT_TYPES, CATALOG_SECTIONS } from "../../../constants";

const initialState = {
  numPage: 1,
  catalogSection: localStorage.getItem('currentPage') || CATALOG_SECTIONS.Food,
  quantityOfItem: 0,
  sortParam: SORT_TYPES.ByPrice,
  sortValue: SORT_TYPES.ByAsc
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setNumberPage: (state, action) => {
      state.numPage = action.payload;
    },
    setSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
    setSortValue: (state, action) => {
      state.sortValue = action.payload;
    },
    setQuantityOfItem: (state, action) => {
      state.quantityOfItem = action.payload;
    },
    setCatalogSection: (state, action) => {
      state.catalogSection = action.payload;
    },
  },
});

export const { setNumberPage, setSortParam, setSortValue, setLimit, setQuantityOfItem, setCatalogSection } = mainSlice.actions;
export default mainSlice.reducer;
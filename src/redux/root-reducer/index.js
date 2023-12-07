import { combineSlices } from '@reduxjs/toolkit'
import { mainSlice } from '../slices/main/mainSlice.js';
import { productsSlice } from '../slices/products/productsSlice.js';


export const rootReducer = combineSlices(mainSlice, productsSlice);
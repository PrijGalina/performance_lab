import { combineSlices } from '@reduxjs/toolkit'
import { mainSlice } from '../slices/main/mainSlice.js';
import { dataSlice } from '../slices/data/dataSlice.js';
import { cartSlice } from '../slices/cart/cartSlice.js';

export const rootReducer = combineSlices(mainSlice, dataSlice, cartSlice);
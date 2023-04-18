/* eslint-disable no-underscore-dangle */
import { createSlice } from '@reduxjs/toolkit';

const productData = [
  { id: 1, title: 'Socks', price: 100, emoji: '🧦' },
  { id: 2, title: 'T-Shirt', price: 200, emoji: '👕' },
  { id: 3, title: 'Pants', price: 350, emoji: '👖' },
  { id: 4, title: 'Dress', price: 150, emoji: '👗' }
]

export const products = createSlice({
  name: 'products',
  initialState: productData
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
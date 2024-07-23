import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './Slices/booksSlice';
import cartReducer from './Slices/cartSlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    cart: cartReducer,
  },
});

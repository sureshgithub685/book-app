import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const selectedCartId = action.payload.id;
      state.items = state.items.filter(item => item.id !== selectedCartId);
    },
    resetCart : (state, action) => {
      state.items = [];
    },
    adjustQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const selectedItem = state.items.find(item => item.id === id);
      if (selectedItem) {
        selectedItem.quantity = quantity;
      }
    },
  },
  extraReducers: (builder) => {
    // Additional reducers can be added here if necessary
  },
});

export const { addToCart, removeFromCart, adjustQuantity , resetCart} = cartSlice.actions;

export const selectedCartItems = (state) => state.cart.items;

export default cartSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import shopReducer  from '../Redux/Shop/shopSlice'

const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
});

export default store;

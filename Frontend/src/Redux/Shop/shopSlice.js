import { createSlice } from '@reduxjs/toolkit';
import all_product from '../../Components/Assests/all_product';



const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    products: all_product,
  },
  reducers: {},
});

export const selectAllProducts = (state) => state.shop.products; // Selector for products
export default shopSlice.reducer;

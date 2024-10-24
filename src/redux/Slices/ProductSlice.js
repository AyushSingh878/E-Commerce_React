import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [],
    
  };

export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts:(state, action)=>{
      state.products = action.payload;
    },
    sortProductsByPrice:(state) => {
      state.products.sort((a, b) => a.price - b.price);
      state.sortedByPrice = true;
    },
    resetSort:(state) => {
      state.sortedByPrice = false;
    },
    editProduct:(state, action) => {
      const { id, product } = action.payload;
      const index = state.products.findIndex((item) => item.id === Number(id));
      if (index !== -1) {
        state.products[index] = product;
      }
    },
  }
})

export const { fetchProducts, sortProductsByPrice, resetSort, editProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
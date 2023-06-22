import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartslice";
import productSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    products: productSlice.reducer,
  },
});

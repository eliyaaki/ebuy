import { createSlice } from "@reduxjs/toolkit";
import products from "../../mocks/products";
const initialAreaState = {
  showCart: false,
  products: products,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialAreaState,
  reducers: {
    ToggelCart(state, action) {
      state.showCart = !state.showCart;
    },
    AddProduct(state, action) {
      state.products = state.products.map((p) => {
        if (p.id === action.payload) {
          p.quntity++;
          state.totalQuantities++;
          state.totalPrice = state.totalPrice + parseInt(p.price);
        }
        return p;
      });
    },
    SubProduct(state, action) {
      state.products = state.products.map((p) => {
        if (p.id === action.payload && p.quntity > 0) {
          p.quntity--;
          state.totalQuantities--;
          state.totalPrice = state.totalPrice - p.price;
        }
        return p;
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

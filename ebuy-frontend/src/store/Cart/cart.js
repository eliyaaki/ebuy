import { createSlice } from "@reduxjs/toolkit";
import products from "../../mocks/products";
const initialAreaState = {
  showCart: false,
  products: products,
  productsCopy: products,
  textFilters: [
    { index: 1, name: "Author", text: "" },
    { index: 2, name: "Title", text: "" },
    { index: 3, name: "Keywords", text: "" },
    { index: 4, name: "Categories", text: "" },
  ],
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
      state.cartItems = state.productsCopy.filter((p) => {
        if (p.id === action.payload) {
          p.quntity++;
          state.totalQuantities++;
          state.totalPrice = state.totalPrice + parseInt(p.price);
          return true;
        }
      });
      state.products = state.products.map((p) => {
        if (p.id === action.payload) {
          p.quntity++;
        }
        return p;
      });
    },
    SubProduct(state, action) {
      state.cartItems = state.productsCopy.filter((p) => {
        if (p.id === action.payload && p.quntity > 0) {
          p.quntity--;
          state.totalQuantities--;
          state.totalPrice = state.totalPrice - p.price;
          if (p.quntity > 0) {
            return true;
          }
        }
      });
      state.products = state.products.map((p) => {
        if (p.id === action.payload && p.quntity > 0) {
          p.quntity--;
        }
        return p;
      });
    },
    filterByText(state, action) {
      state.textFilters[action.payload.index - 1].text = action.payload.value;
      state.products = state.productsCopy.map((product) => {
        const filtered = state.textFilters.filter((filter) => {
          return String(product[filter.name])
            .toLocaleLowerCase()
            .includes(filter.text.toLocaleLowerCase());
        });
        if (filtered.length >= state.textFilters.length) {
          return product;
        } else {
          return null;
        }
      });
    },
    clearFilters(state, action) {
      state.textFilters = state.textFilters.map((filter) => {
        filter.text = "";
        return filter;
      });
      state.products = state.productsCopy;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { Productdata } from "./../../Assets/data/Data";

export const Allproducts = createSlice({
  name: "allproducts",
  initialState: {
    carts: [],
    items: Productdata,
    Totalqnty: 0,
    Totalprice: 0,
    search: "",
  },
  reducers: {
    Addtocart: (state, action) => {
      return {
        ...state,
        carts: [...state.carts, { ...action.payload, qty: 1 }],
      };
    },

    Removecart: (state, action) => {
      return {
        ...state,
        carts: state.carts.filter((c) => c.id !== action.payload.id),
      };
    },

    Increment: (state, action) => {
      state.carts = state.carts.map((ca) =>
        ca.id === action.payload.id ? { ...ca, qnty: ca.qnty + 1 } : ca
      );
    },

    Decrement: (state, action) => {
      state.carts = state.carts.map((ca) =>
        ca.id === action.payload.id ? { ...ca, qnty: ca.qnty - 1 } : ca
      );
    },
    // search: (state, action) => {
    //   state.search = action.payload;
    // },
  },
});

export const { Addtocart, Removecart, Increment, Decrement, Gettotal, search } =
  Allproducts.actions;

export default Allproducts.reducer;

import { configureStore } from "@reduxjs/toolkit";
import Allproducts from "../Features/Productslice";
const store1 = configureStore({
  reducer: {
    allcarts: Allproducts,
  },
});

export default store1;

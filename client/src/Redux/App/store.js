import { configureStore } from "@reduxjs/toolkit";
//import { Gituser } from "../Features/Userslice";
// import cartreducer from "./../Features/Userslice";
import { Users } from "../Features/Userslice";

const store = configureStore({
  reducer: {
    allusers: Users,
  },
});

export default store;

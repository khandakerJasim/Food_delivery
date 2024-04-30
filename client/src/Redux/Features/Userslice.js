import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { Productdata } from "../../Assets/data/Data";

// export const Gituser = createAsyncThunk("gituser", async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const result = await response.json();
//   console.log(result);
//   return result;
// });

// export const userslice = createSlice({
//   name: "carddata",
//   initialState: {
//     allcarts: [],
//     items: Productdata,
//   },
//   reducers: {},
// });
// export default userslice.reducer;

// export const Users = createSlice({
//   name: "gituser",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//   },
//   reducers:{

//   },

//   extraReducers: {
//     [Gituser.pending]: (state) => {
//       state.loading = true;
//     },
//     [Gituser.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//     },
//     [Gituser.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export default Users.reducer;

import { configureStore } from "@reduxjs/toolkit";


import wishSlice from "./wishSlice";

export const store = configureStore({
  reducer: {
    
    wish: wishSlice,
  },
});
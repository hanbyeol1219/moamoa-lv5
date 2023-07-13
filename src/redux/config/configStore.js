import { configureStore } from "@reduxjs/toolkit";
import modal from "../modules/modalSlice";

const store = configureStore({
  reducer: {
    modal,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

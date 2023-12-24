import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../CartComponents/CartSlice";

export const store = configureStore({
  reducer: CartSlice,
});

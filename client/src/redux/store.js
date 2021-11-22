import { configureStore } from "@reduxjs/toolkit";
import dappAppReducer from "./dappAppSlice";

const store = configureStore({
  reducer: {
    dappApp: dappAppReducer,
  },
});

export default store;

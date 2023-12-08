import { configureStore } from "@reduxjs/toolkit";
// Slices
import homeNewsReducer from "./slices/homeNews.slice";

const store = configureStore({
  reducer: {
    homeNews: homeNewsReducer,
  },
});

export default store;

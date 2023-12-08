import { configureStore } from "@reduxjs/toolkit";
// Slices
import homeNewsReducer from "./slices/homeNews.slice";
import partnersReducer from "./slices/partnersSlice";

const store = configureStore({
  reducer: {
    homeNews: homeNewsReducer,
    partners: partnersReducer,
  },
});

export default store;

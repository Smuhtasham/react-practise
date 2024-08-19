import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../src/components/Reducers/countSlice";
export const store = configureStore({
  reducer: { count: countReducer },
});

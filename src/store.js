import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../src/components/Reducers/counterSlice";
export const store = configureStore({
  reducer: { counter: counterReducer },
});

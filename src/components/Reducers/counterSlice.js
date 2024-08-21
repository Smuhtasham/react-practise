import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    inputValue:[],
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    setInputValue: (state, action) => {
      state.inputValue.push(action.payload);
    }
  },
});

export const { increment, decrement, setInputValue } = counterSlice.actions;

export default counterSlice.reducer;

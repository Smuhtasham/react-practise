import { createSlice } from "@reduxjs/toolkit";


export const counterSlice= createSlice({
    name:'counter',
    initialState:{
    counter:[],},
    reducers:{
        increment: (state)=>{
            state.counter = state;
             
        },
        
    }
})

export const {increment, decrement}=counterSlice.actions;

export default counterSlice.reducer;
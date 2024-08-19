import { createSlice , nanoid} from "@reduxjs/toolkit";


export const countSlice= createSlice({
    name:'count',
    initialState:{
    counter:0, } ,
    reducers:{
        add: (state)=>{
            state.counter += 1;
             
        },
        sub: (state)=>{
            state.counter -= 1;
        },
    }
})

export const {add, sub}=countSlice.actions;

export default countSlice.reducer;
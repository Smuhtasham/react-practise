import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increment, decrement } from "./Reducers/counterSlice";

const Counter = () => {
  const counter = useSelector(state => 
    state.counter.counter
  );
  const dispatch= useDispatch();
  const form = useRef();
  const value = ()=>{
   const inputValue = form.current.value;
   dispatch(decrement(inputValue));
  }
  return (
    <>
      <div className="flex">
        <input type="text" name="" id="" ref={form} />
        <div className="flex p-10 gap-6 w-[40%] m-auto items-center justify-center">
        <button className="bg-slate-400 py-4 px-4" onClick={value}>-</button>
        <h4>{counter} </h4>
        <button className="bg-slate-400 py-4 px-4" onClick={()=> dispatch(increment())}>+</button>
      </div></div>
    </>
  );
};

export default Counter;

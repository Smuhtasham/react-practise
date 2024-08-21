import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setInputValue } from "./Reducers/counterSlice";
import { Link } from "react-router-dom";

const Counter = () => {
  const [input, setInput] = useState();

  const counter = useSelector(state => 
    state.counter.inputValue
  );
  const dispatch= useDispatch();


    const Submit = () => {
      dispatch(setInputValue(input))
    };
 

  return (
    <>
    <input type="text" name="" id="" value={input} onChange={(e)=> setInput(e.target.value)} className="border-2 border-black my-10" />
    <button className="" onClick={Submit}>Submit</button>
    <div className="py-6"><Link to="/data">Data</Link></div>

    </>
  )};


export default Counter;

import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, sub } from "./Reducers/countSlice";

const Counter = () => {
  const count = useSelector((state) => {
    state.count.count;
  });

  return (
    <>
      <div>
        <button>-</button>
        <h4>{count} </h4>
        <button>+</button>
      </div>
    </>
  );
};

export default Counter;

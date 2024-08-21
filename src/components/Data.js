import React from 'react'

import { useSelector } from "react-redux";

const Data = () => {

    const counter = useSelector(state => 
        state.counter.inputValue
      );
  return (
    <>
    <div>{counter.map((data)=>{
        return <div>{data}</div>;
    }
    )}</div>
    </>
  )
};

export default Data
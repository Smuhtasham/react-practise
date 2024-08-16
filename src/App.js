import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";

const App = () => {
  return (
    <>
      <div className="bg-white h-[100vh]">
        <div className="flex flex-col items-center justify-center py-10">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;

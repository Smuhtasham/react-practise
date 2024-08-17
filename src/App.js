import React from "react";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="bg-white h-[100vh]">
        <div className="flex flex-col items-center justify-center py-10">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;

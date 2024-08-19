import React, { useEffect, useLayoutEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
import { boolean } from "yup";

const App = () => {



  // const [isAuthenticated, setIsAuthenticated] = useState();

  // useLayoutEffect(() => {
  //   const m = localStorage.getItem("status");
  //   setIsAuthenticated(m);
  //   console.log(m);
  // }, []);

  return (
    <div className="bg-white h-[100vh]">
      {/* <div className="flex flex-col items-center justify-center py-10">
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/main"
            element={isAuthenticated ? <Main /> : <Login />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div> */}




      
    </div>
  );
};

export default App;

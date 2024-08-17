import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = () => {
      setIsAuthenticated(false);
    };

    checkAuthStatus();
  }, []);

  return (
    <div className="bg-white h-[100vh]">
      <div className="flex flex-col items-center justify-center py-10">
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/main"
            element={isAuthenticated ? <Main /> : <Navigate to="/" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

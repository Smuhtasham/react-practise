import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const url = "https://randomuser.me/api/";

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();

      if (data) {
        navigate("/login");
      }
    } catch (error) {
      setError(error)

    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="text-3xl font-bold py-4">Main Page</div>
      <button
        onClick={getData}
        className="bg-slate-500 px-2 py-2 rounded-lg text-white"
      >
        Login Page
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error in getting data...</p>}
    </>
  );
};

export default Main;

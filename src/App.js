import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [difference,setDifference] = useState(0);

  const targetDate = new Date("2024-08-08");

  
useEffect(() => {

    const calculateDifference = () => {
      const now = new Date();
      const timeDifference = targetDate - now;
      setDifference(timeDifference);
    };

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
      calculateDifference();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  
  }, []);
 
  const formatDifference = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
    <div className="">
    <div className=" text-blue-600 items-center justify-center text-center">{count}</div>
      <div className="text-blue-600 items-center justify-center text-center">
        Time until target date: {formatDifference(difference)}
      </div>
    </div>
    </>
  );
}

export default App;

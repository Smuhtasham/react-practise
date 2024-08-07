import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const date = new Date(milliseconds);
  console.log(date)

  useEffect(() => {
    const intervel = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervel);
    };
  }, []);

 

  return (
    <>
    <div className="">
      <div className="text-blue-600 items-center justify-center text-center">{count}</div>
    </div>
    </>
  );
}

export default App;

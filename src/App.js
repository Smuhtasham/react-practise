import { useEffect, useState } from "react";

function App() {
  
  const [count, setCount] = useState(0);

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
      <div className="text-blue-600">{count}</div>
    </>
  );
}

export default App;

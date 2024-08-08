import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = "https://randomuser.me/api?results=50";

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setCount(data);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <>
      <div className="">
        <div className=" text-black">
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              count.results.map((data) => {
                return <div>{data.name.first}</div>;
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

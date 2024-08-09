import useFetch from "./useFetch";

function App() {
 const data = useFetch("https://randomuser.me/api/?results=10")
  console.log(data)
  return (
    <>
      <div className="text-black">
      {false ? (
              <p>Loading...</p>
            ) : (
              data?.results?.map((data) => {
                return <div>{data.name.first}</div>;
              })
            )}
          </div>
    </>
  );
}

export default App;

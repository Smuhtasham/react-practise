import useFetch from "./useFetch";

function App() {
 const api = useFetch("https://randomuser.me/api/?results=10")
 
  
  return (
    <>
      <div className="text-black">
              {api?.results?.map((data, index) => {
                return <div key={index}>{data.name.first}</div>
              })}
          </div>
    </>
  );
}

export default App;

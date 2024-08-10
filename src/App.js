import useFetch from "./useFetch";

function App() {
  const [data, loading, error] = useFetch(
    "https://randomuser.me/api/?results=10"
  );
  console.log(data);

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="text-black">
        {loading ? (
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

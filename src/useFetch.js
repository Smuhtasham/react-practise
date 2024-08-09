import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const getData = async () => {
        try {const res = await fetch(url);
            const data = await res.json();
            setData(data);}
        catch(error){console.log(error)}
      };
  
      getData();
      
     }, [url]);

  return data;
};

export default useFetch;
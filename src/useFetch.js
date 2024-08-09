import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
            
        try {setLoading(true)
            const res = await fetch(url);
            const data = await res.json();
                setData(data);
                setLoading(false)
        }

        catch(error){console.log(error)}
      };
  
      getData();
      
     }, [url]);

  return data,loading;
};

export default useFetch;
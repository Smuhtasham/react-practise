import React, { useEffect, useRef, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(30);
  const [loading, setLoading] = useState(false);

  const scrollRef = useRef(null);

  const url = "https://randomuser.me/api/?results=500";

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, [url]);

  const handleScroll = () => {
    if (scrollRef.current) {
      if (scrollRef.current.scrollTop + scrollRef.current.clientHeight >= scrollRef.current.scrollHeight - 5) {
        if (show < data.results.length) {
          setShow(show + 30);
        }
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
      return () => {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, [data, show]);

  return (
    <div
      ref={scrollRef}
      style={{ height: '595px', overflowY: 'scroll' }}
    >
      {data?.results?.slice(0, show).map((user, index) => (
        <div key={index} className='p-2'>{user.name.first}</div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default App;

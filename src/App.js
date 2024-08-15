import React, { useEffect, useRef, useState } from 'react';
import './input.css';

const App = () => {
  const [scroll, setScroll] = useState(0);

  const boxRefs = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

console.log(scroll)
  return (
    <>
      <div className='box w-[100%] h-[100vh] py-10 text-center border-2 border-black bg-slate-400'>
        Box 1
      </div>
      <div className='box w-[100%] h-[100vh] py-10 text-center border-2 border-black bg-emerald-400'>
        Box 2
      </div>
      <div className='box w-[100%] h-[100vh] py-10 text-center border-2 border-black bg-lime-400'>
        Box 3
      </div>
      <div
        ref={boxRefs}
        className={`box h-[100vh] w-[100%] py-10 text-center border-2 border-black bg-amber-400 ${scroll>1900 ? 'in-view' : ''}`}
      >
        Box 4
      </div>
    </>
  );
};

export default App;

import React, { useRef } from "react";

const App = () => {
  
  const Vid = useRef(null);

  const playVid = () => {
    if (Vid.current) {
      Vid.current.play();
    }
  };
  const pauseVid = () => {
    if (Vid.current) {
      Vid.current.pause();
    }
  };
  const ahead = (time) => {
    if (Vid.current) {
      Vid.current.currentTime = time;
    }
  };



  return (
    <>
      <div className="w-[100vh] m-auto">
        <video className="w-[600px]" ref={Vid} src="video.mp4"></video>
      </div>
      <div className="flex justify-center gap-2">
        <button onClick={playVid} className="bg-slate-400 mt-2 px-4 py-1 rounded-lg">
          Play
        </button>
        <button onClick={pauseVid} className="bg-slate-400 mt-2 px-4 py-1 rounded-lg">
          Pause
        </button>
        <button onClick={() => ahead(10)} className="bg-slate-400 mt-2 px-4 py-1 rounded-lg">
          10+
        </button>
      </div>
    </>
  );
};

export default App;

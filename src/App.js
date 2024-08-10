import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const scrollFunction = () => {
      let val = window.scrollY;
      let top = val * 1.2;
      let finaltop = Math.floor(top);

      if (finaltop <= 360) {
        setScroll(finaltop);
      } else {
        setScroll(360);
        setScale(finaltop / 100);
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <>
      <div className="bg-black relative h-[200vh] overflow-hidden">
        <img
          style={{
            bottom: scroll === 360 ? "auto" : `${scroll}px`,
            transform: `scale(${scale})`,
            position: scroll === 360 ? "fixed" : "absolute",
            top: scroll === 360 ? "230px" : "auto",
          }}
          className="w-[100px] h-[80px] left-[500px]"
          src="moon.png"
          alt="Moon"
        />
      </div>
    </>
  );
}

export default App;

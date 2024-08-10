import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(0);
  const [scale, setScale] = useState(2.40667);

  useEffect(() => {

    const scrollFunction = () => {
      let val = window.scrollY;
      let top = val * 1.2;
      let finaltop = Math.floor(top);
  
      if (finaltop <= 400) {
        setScroll(finaltop);
      } else {
        setScroll(400);
        setScale(finaltop / 150);
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, [scroll,scale]);


 


  return (
    <>
      <div className="bg-black relative h-[200vh] overflow-hidden">
        <img
          style={{
            bottom: scroll === 400 ? "auto" : `${scroll}px`,
            transform: `scale(${scale})`,
            position: scroll === 400 ? "fixed" : "absolute",
            top: scroll === 400 ? "245px" : "auto",
          }}
          className="w-[120px] h-[100px] left-[550px]"
          src="moon.png"
          alt="Moon"
        />
      </div>
    </>
  );
}

export default App;

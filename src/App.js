import { useEffect, useState } from "react";

function App() {
  const [scroll, setScroll] = useState(0);
  const [scale, setScale] = useState(1); // Initialize scale to 1 instead of 0

  useEffect(() => {
    window.addEventListener("scroll", scrollfunction);
    return () => {
      window.removeEventListener("scroll", scrollfunction);
    };
  }, []);

  const scrollfunction = () => {
    if (scroll < 300) {
      let val = window.scrollY;
    let top = val * 1.2;
    let finaltop = Math.floor(top);
      setScroll(finaltop);
    }
    else{
    let val = window.scrollY;
    let top = val * 1.2;
    let finaltop = Math.floor(top);
    setScroll(finaltop);
  }
  };

  console.log({ scroll });
  console.log({ scale });

  return (
    <>
      <div className="bg-black relative h-[180vh] overflow-hidden">
        <img
          style={{ bottom: scroll, transform: `scale(${scale})` }}
          className="w-[130px] h-[100px] absolute left-[500px]"
          src="moon.png"
          alt=""
        />
      </div>
    </>
  );
}

export default App;

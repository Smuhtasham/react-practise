import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState("");

  const text = document.getElementById("moon");

  window.addEventListener("scroll", () => {
    let val = window.scrollY;
    let top = val * 2 + "px";
    setScroll(top);

  });
console.log(scroll)
  // let val = window.scrollY;
  // let scroll = val * 2 +'px';

  // console.log(scroll);

  return (
    <>
      <div className="bg-black h-[700px] ">
        <div className={`flex left-[500px] absolute top-[${scroll}]`}>
          <img className=" w-[100px]" src="moon.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;

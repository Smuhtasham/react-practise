import { useEffect, useState } from "react";

function App() {
  const [small, setSmall] = useState(false);
  const [day, setDay] = useState(true);
  const [stars, setStars] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setDay(window.scrollY > 0 && window.scrollY < 150);
        setSmall(window.scrollY > 150);
        setStars(window.scrollY > 260);
      });
      return () => {
        setDay(false);
      };
    }
  }, []);
  console.log(small);
  return (  
    <>
      <div className={`h-[500px] bg-black`}>
        <div className={`${day ? "" : "hidden"}`}>
          <img src="pic0.jpg" alt="" />
        </div>
        <div className={`transition translate-y-6 ease-in-out delay-1000 ${small ? "absolute " : "hidden"}`}>
          <img className="h-[750px]" src="pic1.jpg" alt="" />
        </div>
        <div className={` ${stars ? "absolute top-[30%] " : "hidden"}`}>
            <img className="w-[450px]" src="stars.gif" alt="" />
          </div>
        <div className={` ${stars ? "absolute left-[60%] top-[30%]" : "hidden"}`}>
            <img className="w-[450px]" src="stars.gif" alt="" />
          </div>
      </div>
    </>
  );
}

export default App;

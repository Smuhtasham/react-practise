import { useEffect, useState } from "react";

function App() {
  const [small, setSmall] = useState(false);
  const [stars, setStars] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setSmall(scrollY > 100);
      setStars(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative h-[700px] overflow-hidden">
        {/* Background Image */}
        <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center z-0">
          <img src="pic0.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        {/* Overlay Images */}
        <div className={`relative z-10 slide-in-up ${small ? "show" : ""}`}>
          <img className="h-[750px]" src="pic1.jpg" alt="" />
        </div>
        <div
          className={`absolute top-[30%] left-[10%] z-20 fade-in-up ${
            stars ? "show" : ""
          }`}
        >
          <img className="w-[450px]" src="stars.gif" alt="" />
        </div>
        <div
          className={`absolute top-[30%] left-[60%] z-20 fade-in-up ${
            stars ? "show" : ""
          }`}
        >
          <img className="w-[450px]" src="stars.gif" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;

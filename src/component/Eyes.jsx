import { useEffect, useState } from "react";
import img from "../assets/Top-Viewbbcbv-1-scaled.jpg";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden">
      <div
        className="w-full h-full bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url(${img})` }}
        data-scroll
        data-scroll-speed="-.4"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center gap-x-8">
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 bg-black rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] w-full"
              >
                <div className="h-6 w-6 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-white rounded-full flex justify-center items-center">
            <div className="w-2/3 h-2/3 bg-black rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[6] w-full"
              >
                <div className="h-6 w-6 rounded-full bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;

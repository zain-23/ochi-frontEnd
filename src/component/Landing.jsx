import { FaArrowUpLong } from "react-icons/fa6";
import img from "../assets/content-image01.jpg";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="w-full h-screen pt-1" data-scroll data-scroll-speed="-.3">
      <div className="font-founderGrotesk mt-52 px-20">
        {["We create", "Eye-opening", "PRESENTATIONS"].map((item, i) => (
          <div key={i}>
            <div className="w-fit flex items-end overflow-hidden">
              {i === 1 && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "8vw" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[8vw] rounded-md h-[5.4vw] mr-[1vw] relative top-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${img})`,
                  }}
                ></motion.div>
              )}
              <h1 className="text-[8vw] leading-[.8] uppercase -mb-[.1vw]">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px border-zinc-800] mt-32 px-20 flex justify-between items-center font-NeueMontreal py-5 tracking-wider">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((data, i) => (
          <p key={i} className="text-xl leading-none">
            {data}
          </p>
        ))}
        <div className="flex items-center gap-5">
          <div className="py-2 px-6 border-[1px] border-zinc-500 text-lg uppercase rounded-full">
            START A PROJECT
          </div>
          <div className="w-10 h-10 border-[1px] border-zinc-500 rounded-full flex items-center justify-center">
            <span className="rotate-45">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

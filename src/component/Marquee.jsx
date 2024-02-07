import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div className="w-full py-10 bg-[#004d43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t border-b  border-zinc-300 flex gap-10 whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: -100 }}
          transition={{ repeat: "Infinity", ease: "linear", duration: 5 }}
          className="leading-none text-[25vw] uppercase font-founderGrotesk -mb-[2vw] -mt-[4vw] text-white"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: -100 }}
          transition={{
            repeat: "Infinity",
            ease: "linear",
            duration: 5,
          }}
          className="leading-none text-[25vw] uppercase font-founderGrotesk -mb-[2vw] -mt-[4vw] text-white"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;

import React from "react";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="font-founderGrotesk mt-52 px-20">
        {["We create", "Eye-opening", "PRESENTATIONS"].map((item, i) => (
          <div className="masker">
            <h1 className="text-[7.5vw] leading-[.8] uppercase">{item}</h1>
          </div>
        ))}
      </div>
      <div className="border-t-[1px border-zinc-800] mt-32 px-20 flex justify-between items-center font-NeueMontreal py-5">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
          "START A PROJECT",
        ].map((data, i) => (
          <p key={i} className="text-xl leading-none tracking-wider">
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Landing;

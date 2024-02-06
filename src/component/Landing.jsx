import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="font-founderGrotesk mt-52 px-20">
        {["We create", "Eye-opening", "PRESENTATIONS"].map((item, i) => (
          <div className="">
            <div className="w-fit flex items-end overflow-hidden">
              {i === 1 && (
                <div className="w-[8vw] rounded-md h-[5.4vw] mr-[1vw] relative top-0"></div>
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

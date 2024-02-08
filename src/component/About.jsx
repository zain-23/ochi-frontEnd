import { motion } from "framer-motion";
import img from "../assets/Homepage-Photo-663x469.jpg";

const About = () => {
  return (
    <div className="bg-[#cdea68] pt-20 pb-10 rounded-tl-3xl rounded-tr-3xl w-full font-NeueMontreal">
      <div className="pr-80 mb-28 pl-20">
        <h1 className="tracking-wide leading-none font-black text-[3.2vw]">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to{" "}
          <a href="" className="link relative">
            raise fund
          </a>
          ,{" "}
          <a href="" className="link relative">
            sell products
          </a>
          ,{" "}
          <a href="" className="link relative">
            explain complex ideas
          </a>
          , and{" "}
          <a href="" className="link relative">
            hire great people
          </a>
          .
        </h1>
      </div>
      <div className="border-t border-zinc-500 px-20 pt-10 pb-36">
        <div className="grid grid-cols-8">
          <div className="col-span-4">
            <h4 className="text-[1.2vw] font-semibold tracking-wider">
              What you can expect:
            </h4>
          </div>
          <div className="col-span-2">
            <p className="text-[1.2vw] font-semibold tracking-wider">
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether its live or digital,
              delivered for one or a hundred people.
            </p>
            <p className="text-[1.2vw] font-semibold tracking-wider mt-[1.5vw]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-500 px-20 py-10">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <h2 className="leading-none text-[4vw] font-bold">Our approach:</h2>
            <button className="uppercase py-4 px-8 bg-black text-white text-[1vw] font-bold rounded-full mt-6 flex justify-between items-center gap-x-4">
              Read more
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </button>
          </div>
          <div className="col-span-1">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 100 }}
              src={img}
              className="w-full h-full rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

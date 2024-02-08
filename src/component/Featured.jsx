import { motion } from "framer-motion";
import project1 from "../assets/Fyde_Illustration_Crypto_2-663x551.png";
import project2 from "../assets/Vise_front2-663x551.jpg";
import project3 from "../assets/PB-Front-4-663x551.png";
import project4 from "../assets/Frame-3875-663x551.jpg";

const Featured = () => {
  const featuredProject = [
    {
      title: "FYDE",
      project: project1,
      tag: ["Audit", "Copywriting", "sales Deck", "Slides Design"],
    },
    {
      title: "VISE",
      project: project2,
      tag: ["Audit", "Copywriting", "sales Deck", "Slides Design"],
    },
    {
      title: "TRAWA",
      project: project3,
      tag: ["Audit", "Copywriting", "sales Deck", "Slides Design"],
    },
    {
      title: "PREMIUM BLEND",
      project: project4,
      tag: ["Audit", "Copywriting", "sales Deck", "Slides Design"],
    },
  ];
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b border-zinc-600 pb-16">
        <h2 className="text-[3vw] font-NeueMontreal tracking-wide leading-none font-bold">
          Featured projects
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-20 px-20 pt-20">
        {featuredProject.map((project, i) => (
          <div className="col-span-1" key={i}>
            <div className="w-full">
              <div className="flex items-center gap-x-3">
                <div className="w-4 h-4 rounded-full bg-black"></div>
                <h5 className="text-[1vw] font-NeueMontreal font-bold uppercase">
                  {project.title}
                </h5>
              </div>
              <div className="w-full mt-4">
                <motion.img
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 0.93 }}
                  transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.9 }}
                  src={project.project}
                  className="w-full h-full rounded-xl"
                  alt=""
                />
              </div>
              <div className="flex flex-wrap gap-x-3 mt-3">
                {project.tag.map((tab, i) => (
                  <button
                    key={i}
                    className="font-NeueMontreal text-[1vw] px-4 py-1 font-bold tracking-wide border-2 border-zinc-500 rounded-full"
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

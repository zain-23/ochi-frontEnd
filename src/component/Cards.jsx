import logo1 from "../assets/logo001.svg";
import logo2 from "../assets/logo002.svg";
import logo3 from "../assets/logo003.png";

const Cards = () => {
  const cards = [
    {
      img: logo1,
      rate: "2024",
    },
    {
      img: logo2,
      rate: "rating 5.0 on clutch",
    },
    {
      img: logo3,
      rate: "busness bootcamp alumani",
    },
  ];
  return (
    <div className="w-full h-screen px-20 py-16">
      <div className="grid grid-cols-8 gap-6">
        {cards.map((data, i) => (
          <div
            className={`h-[60vh] flex justify-center items-center rounded-xl relative ${
              i === 0
                ? "col-span-4 bg-[#004d43] border border-black"
                : "col-span-2 bg-[#212121]"
            }`}
            key={i}
          >
            <img src={data.img} alt="" />
            <button
              className={`py-2 px-4 rounded-full uppercase tracking-wide font-NeueMontreal font-bold absolute left-[5%] bottom-[5%] ${
                i === 0
                  ? "text-[#bcdd65] border border-[#bcdd65]"
                  : "text-white border"
              }`}
            >
              {data.rate}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

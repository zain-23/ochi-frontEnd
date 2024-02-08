const Footer = () => {
  const links = [
    {
      title: "S:",
      link: ["Instagram", "Behance", "Facebook", "Linkedin"],
    },
    {
      title: "L:",
      link: [
        "202-1965 W 4th Ave",
        "Vancouver, Canada",
        "30 Chukarina St",
        "Lviv, Ukraine",
      ],
    },
    {
      title: "E:",
      link: ["zaynshah397@gmail.com"],
    },
  ];
  return (
    <div className="w-full h-screen px-20 border">
      <div className="grid grid-cols-2 font-founderGrotesk">
        <div className="col-span-1 h-full">
          <h3 className="text-[8vw] uppercase font-bold leading-[120px]">
            EYE-
          </h3>
          <h3 className="text-[8vw] uppercase font-bold leading-[120px]">
            OPENING
          </h3>
        </div>
        <div className="col-span-1 h-full">
          <h3 className="text-[8vw] uppercase font-bold leading-[120px]">
            PRESENTATIONS
          </h3>
          <div className="font-NeueMontreal tracking-wide font-bold text-[1.1vw] mt-10 flex flex-col gap-y-16">
            {links.map((data, i) => (
              <div key={i} className="">
                <h5>{data.title}</h5>
                <ul className="mt-5">
                  {data.link.map((data, i) => (
                    <li>
                      <a href="" key={i} className="tracking-wider">
                        {data}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex justify-between">
              <h5 className="font-semibold">© ochi design 2024. Legal Terms</h5>
              <h5 className="font-semibold">Design By Zayn</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

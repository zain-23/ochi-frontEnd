import "./App.css";
import About from "./component/About";
import Cards from "./component/Cards";
import Eyes from "./component/Eyes";
import Featured from "./component/Featured";
import Landing from "./component/Landing";
import Marquee from "./component/Marquee";
import Navbar from "./component/Navbar";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
    </div>
  );
}

export default App;

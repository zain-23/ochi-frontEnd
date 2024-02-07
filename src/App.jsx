import "./App.css";
import About from "./component/About";
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
    </div>
  );
}

export default App;

import "./App.css";
import Landing from "./component/Landing";
import Marquee from "./component/Marquee";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Landing />
      <Marquee />
    </div>
  );
}

export default App;

import "./App.css";
import Landing from "./component/Landing";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="w-full text-white h-screen">
      <Navbar />
      <Landing />
    </div>
  );
}

export default App;

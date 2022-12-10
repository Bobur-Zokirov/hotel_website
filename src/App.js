import "./App.css";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import MainCarusel from "./components/mainCarusel/MainCarusel";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainCarusel />
      <About />
    </div>
  );
};

export default App;

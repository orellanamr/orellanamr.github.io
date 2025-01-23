import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Projects />
      <Home />
    </div>
  );
};

export default App;

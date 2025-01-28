import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default App;

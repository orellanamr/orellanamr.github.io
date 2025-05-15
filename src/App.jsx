import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutMe />
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

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import components
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import Navbar from "./Layouts/Navbar"


const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
    })
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className="py-3 text-center">
        <h6 className="mb-3">OLEKSII ANDRIUSHCHENKO</h6>
        <p>©️ All CopiRigts Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;

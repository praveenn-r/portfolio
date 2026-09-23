import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import CTA from "./components/CTA";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
        <CTA />
      </main>
      <Chatbot />
    </>
  );
}

export default App;

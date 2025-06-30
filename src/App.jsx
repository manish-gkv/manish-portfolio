import Nav from "./components/nav";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Projects from "./components/projects";

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Aboutme />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
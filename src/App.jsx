import Nav from "./components/nav";
import Hero from "./components/hero";
import Aboutme from "./components/aboutme";
import Skills from "./components/skills";
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Aboutme />
      <Skills />
    </div>
  );
}
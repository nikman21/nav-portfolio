
import Hero from "../components/Hero"
import About from "../components/About"
import Contact from "../components/Contact"
import Project from "../components/Project"
export default function Home() {
  return (
    <main className="scroll-smooth">
     <Hero />
     <About />
     <Project />
     <Contact />
    </main>
  );
}

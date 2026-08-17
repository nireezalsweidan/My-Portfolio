import Hero from '../sections/Hero';
import About from '../sections/About';
import Journey from '../sections/Journey';
import Technologies from '../sections/Technologies';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import HireMe from '../sections/HireMe';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Journey />
      <Technologies />
      <Skills />
      <Experience />
      <Projects />
      <HireMe />
      <Contact />
    </main>
  );
}

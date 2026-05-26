import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Course from "./components/Course";
import Benefits from "./components/Benefits";
import Quote from "./components/Quote";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="rule mt-6">
          <Marquee />
        </div>
        <About />
        <Course />
        <Benefits />
        <Quote />
        <Services />
        <Subscribe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

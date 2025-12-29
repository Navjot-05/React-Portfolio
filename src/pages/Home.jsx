import Navbar from "../components/organisms/Navbar";
import Hero from "../components/organisms/Hero";
import Projects from "../components/organisms/Projects";
import Skills from "../components/organisms/Skills";
import Contact from "../components/organisms/Contact";
import Footer from "../components/layout/Footer";
import SkillsSlider from "../components/molecules/SkillSlider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SkillsSlider />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef } from "react";
import SectionTitle from "../atoms/SectionTitle";
import ProjectCard from "../molecules/ProjectCard";

export default function Projects() {

  const ref = useRef(null);

  // ⭐ Your Projects Data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern personal portfolio built with HTML and Tailwind CSS.",
      image: "/images/protfolio.png"
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "A fully-functional shopping app with cart, auth, and payments.",
      image: "/images/ecommerce.png"
    },
    {
      id: 3,
      title: "Weather Website",
      description: "Display live weather data using the OpenWeather API.",
      image: "/images/weather.png"
    }
  ];

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: { trigger: ref.current, start: "top 85%" }
      }
    );
  }, []);

  return (
    <section id="projects" ref={ref} className="px-8 py-20 max-w-6xl mx-auto">
      <SectionTitle>Projects</SectionTitle>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}

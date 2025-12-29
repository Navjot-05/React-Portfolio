
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



import { useEffect, useRef } from "react";
import SectionTitle from "../atoms/SectionTitle";
import SkillBadge from "../molecules/SkillBadge";

export default function Skills() {
  const ref = useRef(null);

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
    <section id="skills" ref={ref} className="px-8 py-20 max-w-5xl mx-auto">
      <SectionTitle>Skills</SectionTitle>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["React", "JavaScript", "TailwindCSS", "Node.js"].map(skill => (
          <SkillBadge key={skill} label={skill} />
        ))}
      </div>
    </section>
  );
}

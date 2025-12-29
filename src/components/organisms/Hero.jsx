
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useRef, useEffect } from "react";
import Button from "../atoms/Button";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.from(heroRef.current, { y: 10, duration: 0.6 });
  }, []);

  return (
    <section id="home" ref={heroRef} className="px-8 py-24 max-w-5xl mx-auto">
      <p className="text-indigo-400">Hello !👋</p>

      <h2 className="text-5xl font-bold mt-4">
        I build <span className="text-indigo-400">modern</span> web experiences using React.
      </h2>

      <p className="mt-6 text-slate-400 max-w-2xl">
        Frontend developer focused on creating clean, user-friendly interfaces and smooth interactive experiences.
      </p>

      <div className="mt-10 flex gap-4">
        <Button>View Projects</Button>
        <Button variant="outline">Contact Me</Button>
      </div>
    </section>
  );
}

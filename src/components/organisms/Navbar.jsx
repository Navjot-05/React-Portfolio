
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useRef, useEffect } from "react";
import NavLink from "../molecules/NavLink";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.from(navRef.current, { y: -20, duration: 0.6 });
  }, []);

  return (
    <header
      ref={navRef}
      className="flex justify-between items-center px-8 py-5 border-b border-slate-800 sticky top-0 bg-slate-950/90 backdrop-blur"
    >
      <h1 className="text-xl font-bold tracking-wide">NAVJOT</h1>

      <nav className="flex gap-6">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </header>
  );
}

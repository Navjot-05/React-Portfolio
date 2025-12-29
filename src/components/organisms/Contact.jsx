import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { useRef, useEffect } from "react";
import SectionTitle from "../atoms/SectionTitle";
import Input from "../atoms/Input";

export default function Contact() {
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
    <section id="contact" ref={ref} className="px-8 py-20 max-w-4xl mx-auto">
      <SectionTitle>Get In Touch</SectionTitle>

      <p className="text-slate-400 mb-6">
        Feel free to reach out 👇
      </p>

      <form className="grid gap-4">
        <Input placeholder="Your Name" />
        <Input placeholder="Email" />
        <textarea className="bg-slate-900 p-3 rounded-lg border border-slate-800" rows="4" placeholder="Message" />
        <button className="bg-indigo-500 hover:bg-indigo-600 py-3 rounded-lg">Send Message</button>
      </form>
    </section>
  );
}

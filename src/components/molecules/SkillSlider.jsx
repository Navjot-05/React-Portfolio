export default function SkillsSlider() {

  const skills = [
    "React",
    "JavaScript",
    "TailwindCSS",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript"
  ];

  return (
    <div className="w-full  py-10">

      <style>
        {`
          /* Infinite scroll animation */
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .slider-track {
            display: flex;
            width: max-content;
            animation: scroll 14s linear infinite;
          }

          /* Optional fade edges */
          .mask-fade {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
            mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }
        `}
      </style>

      {/* Center-aligned container like your page */}
      <div className="max-w-6xl mx-auto overflow-hidden mask-fade">

        <div className="slider-track">

          {/* First row */}
          {skills.map((s, i) => (
            <span
              key={i}
              className="mx-6 px-8 py-3 rounded-2xl  text-white border border-[#151C33]"
            >
              {s}
            </span>
          ))}

          {/* Duplicate row for seamless loop */}
          {skills.map((s, i) => (
            <span
              key={`copy-${i}`}
              className="mx-6 px-8 py-3 rounded-2xl  text-white border border-[#151C33]"
            >
              {s}
            </span>
          ))}

        </div>
      </div>

    </div>
  );
}

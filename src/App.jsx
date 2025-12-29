import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen relative">

      {/* SNOW EFFECT */}
      <style>
        {`
          .snow {
            pointer-events: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 50;
          }

          .snow span {
            position: absolute;
            top: -10px;
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
            opacity: 0.9;
            animation: fall linear infinite;
            filter: drop-shadow(0 0 6px rgba(255,255,255,0.8));
          }

          @keyframes fall {
            0% {
              transform: translateY(-10px) translateX(0px);
            }
            100% {
              transform: translateY(110vh) translateX(20px);
            }
          }
        `}
      </style>

      {/* SNOW LAYER */}
      <div className="snow">
        {Array.from({ length: 60 }).map((_, i) => (
          <span
            key={i}
            style={{
              left: Math.random() * 100 + "vw",
              animationDuration: 4 + Math.random() * 8 + "s",
              animationDelay: Math.random() * 6 + "s",
              opacity: 0.4 + Math.random() * 0.6,
              transform: `scale(${0.5 + Math.random() * 1.5})`,
            }}
          />
        ))}
      </div>

      {/* YOUR WEBSITE CONTENT */}
      <Home />
    </div>
  );
}

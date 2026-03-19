import { motion } from "framer-motion";
import { ChevronDown, Rocket, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

/* =======================
   Floating Cube
======================= */
const FloatingCube = ({
  size,
  left,
  top,
  delay,
  duration,
  rotateStart = 0,
}: {
  size: number;
  left: string;
  top: string;
  delay: number;
  duration: number;
  rotateStart?: number;
}) => (
  <motion.div
    className="absolute preserve-3d"
    style={{ left, top, width: size, height: size, transformStyle: "preserve-3d" }}
    initial={{ rotateX: rotateStart, rotateY: rotateStart, rotateZ: rotateStart }}
    animate={{
      rotateX: [rotateStart, rotateStart + 360],
      rotateY: [rotateStart, rotateStart + 540],
      rotateZ: [rotateStart, rotateStart + 180],
      x: [0, 18, -18, 0],
      y: [0, -30, 15, 0],
      z: [0, 25, -25, 0],
      scale: [1, 1.06, 1],
    }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {[
      `translateZ(${size / 2}px)`,
      `rotateY(180deg) translateZ(${size / 2}px)`,
      `rotateY(-90deg) translateZ(${size / 2}px)`,
      `rotateY(90deg) translateZ(${size / 2}px)`,
      `rotateX(90deg) translateZ(${size / 2}px)`,
      `rotateX(-90deg) translateZ(${size / 2}px)`,
    ].map((transform, i) => (
      <div
        key={i}
        className="absolute w-full h-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-sm"
        style={{ transform }}
      />
    ))}
  </motion.div>
);

/* =======================
   Particle
======================= */
const Particle = ({ delay, left }: { delay: number; left: string }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-cyan-400"
    style={{ left, bottom: 0 }}
    initial={{ opacity: 0, y: 0 }}
    animate={{
      opacity: [0, 1, 0],
      y: [0, -450, -750],
      x: [0, Math.random() * 120 - 60, Math.random() * 180 - 90],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeOut", delay }}
  />
);

const HeroSection = () => {
  const cubes = [
    { size: 42, left: "5%", top: "18%", delay: 0, duration: 14 },
    { size: 32, left: "12%", top: "62%", delay: 1, duration: 12, rotateStart: 45 },
    { size: 52, left: "85%", top: "15%", delay: 0.5, duration: 16 },
    { size: 36, left: "90%", top: "55%", delay: 2, duration: 13 },
    { size: 26, left: "75%", top: "78%", delay: 1.5, duration: 11 },
    { size: 18, left: "25%", top: "25%", delay: 0.8, duration: 10 },
    { size: 16, left: "65%", top: "30%", delay: 1.2, duration: 9 },
    { size: 14, left: "40%", top: "70%", delay: 2.1, duration: 8 },
    { size: 12, left: "55%", top: "80%", delay: 2.8, duration: 7 },
  ];

  /* ========= WAVES (FIXED & SMOOTH) ========= */
  const waves = [
    { d: "M-100,200 Q200,150 400,200 T800,180 T1200,220 T1600,190 T2000,200", gradient: "url(#trail1)", duration: 9 },
    { d: "M-100,260 Q260,210 520,270 T900,240 T1300,280 T1700,250 T2100,260", gradient: "url(#trail2)", duration: 11 },
    { d: "M-100,320 Q320,270 640,330 T1000,300 T1400,340 T1800,310 T2200,320", gradient: "url(#trail3)", duration: 13 },
    { d: "M-100,380 Q380,330 760,390 T1100,360 T1500,400 T1900,370 T2300,380", gradient: "url(#trail1)", duration: 15 },
    { d: "M-100,440 Q440,390 880,450 T1200,420 T1600,460 T2000,430 T2400,440", gradient: "url(#trail2)", duration: 17 },
    { d: "M-100,500 Q500,450 1000,510 T1400,480 T1800,520 T2200,490 T2600,500", gradient: "url(#trail3)", duration: 19 },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 pt-16 sm:pt-24 md:pt-32">

      {/* ===== NEON TOP BAR ===== */}
      <div className="absolute top-0 left-0 w-full h-[4px] z-50 bg-gradient-to-r from-orange-400 via-pink-500 to-cyan-400 shadow-[0_0_28px_rgba(236,72,153,0.7)]" />

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

        {/* ===== WAVES ===== */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="trail1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff0000" />
              <stop offset="100%" stopColor="#00ffff" />
            </linearGradient>
            <linearGradient id="trail2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#1e90ff" />
            </linearGradient>
            <linearGradient id="trail3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff1493" />
              <stop offset="100%" stopColor="#00fa9a" />
            </linearGradient>
          </defs>

          {waves.map((wave, i) => (
            <motion.path
              key={i}
              d={wave.d}
              stroke={wave.gradient}
              strokeWidth={1.2}
              fill="none"
              strokeLinecap="round"
              style={{
                filter: i % 2 === 0 ? "blur(0.6px)" : "blur(1px)",
                opacity: i % 2 === 0 ? 0.55 : 0.35,
              }}
              animate={{
                translateX: [0, 80, -80, 0],
                translateY: [0, -10, 10, 0],
                opacity: [0.25, 0.6, 0.25],
              }}
              transition={{
                duration: wave.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {[...Array(30)].map((_, i) => (
          <Particle key={i} delay={i * 0.25} left={`${Math.random() * 100}%`} />
        ))}
      </div>

      {/* ===== CUBES ===== */}
      <div className="absolute inset-0 pointer-events-none perspective-[1200px]">
        {cubes.map((cube, i) => (
          <FloatingCube key={i} {...cube} />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* TOP CTA */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <div className="flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-medium text-slate-300 bg-slate-800/70 border border-white/10 backdrop-blur-md">
            <span className="text-yellow-400">✦</span>
            India’s Biggest Virtual Hackathon Returns
            <span className="text-yellow-400">✦</span>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-bold mb-6 text-4xl md:text-6xl xl:text-7xl"
        >
          <span className="text-slate-100">Meet The </span>
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            Visionaries
          </span>
          <br />
          <span className="text-slate-100">Behind </span>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            SuPrathon 2.0
          </span>
        </motion.h1>

        <CountdownTimer targetDate="2026-02-07T00:00:00" />

        <div className="mt-10 flex justify-center">
          <button className="flex items-center gap-3 px-10 py-4 rounded-full font-semibold bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 shadow-lg hover:scale-105 transition">
            <Rocket size={18} />
            Reveal The Team
            <Star size={18} />
          </button>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-14 flex flex-col items-center text-slate-400"
        >
          <span>Scroll to explore</span>
          <ChevronDown className="text-yellow-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

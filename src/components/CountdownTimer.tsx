import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  targetDate: string;
}

// Single Time Unit (Days/Hours/Minutes/Seconds)
const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center gap-1 sm:gap-2">
    {/* BOX */}
    <motion.div
      whileHover={{ scale: 1.06 }}
      className="
        group
        w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
        flex items-center justify-center
        rounded-xl
        border border-white/10
        bg-slate-800/60
        backdrop-blur-md
        transition-all duration-300
        hover:bg-yellow-400
        hover:border-yellow-400
        hover:shadow-[0_0_30px_rgba(250,204,21,0.55)]
      "
    >
      <span
        className="
          text-lg sm:text-xl md:text-2xl font-bold
          bg-gradient-to-r from-orange-400 to-pink-500
          bg-clip-text text-transparent
          drop-shadow-[0_0_15px_rgba(255,120,120,0.35)]
          group-hover:text-slate-900
          transition
        "
      >
        {value.toString().padStart(2, "0")}
      </span>
    </motion.div>

    {/* LABEL */}
    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400">
      {label}
    </span>
  </div>
);

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const calculateTimeLeft = () => {
    const diff = +new Date(targetDate) - +new Date();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center mt-8 px-4">
      {/* LAUNCHING IN */}
      <span className="mb-4 text-sm uppercase tracking-widest text-slate-400">
        Launching in
      </span>

      {/* COUNTDOWN */}
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-center">
        <TimeUnit value={time.days} label="Days" />
        <TimeUnit value={time.hours} label="Hours" />
        <TimeUnit value={time.minutes} label="Minutes" />
        <TimeUnit value={time.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;

import { motion } from "framer-motion";
import { Lock, Unlock, User, MousePointerClick } from "lucide-react";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  revealed: boolean;
  image?: string;
}

/* 🌪️ ULTRA HEAVY CONFETTI SHOWER */
const ConfettiBurst = () => {
  const colors = [
    "#facc15",
    "#22d3ee",
    "#fb7185",
    "#a78bfa",
    "#34d399",
    "#f97316",
    "#38bdf8",
    "#e879f9",
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-50 overflow-visible">
      {[...Array(220)].map((_, i) => {
        const size = Math.random() * 6 + 4; // 4–10px
        const isLong = Math.random() > 0.6;

        return (
          <motion.div
            key={i}
            className="absolute rounded-sm"
            style={{
              width: size,
              height: isLong ? size * 2 : size,
              backgroundColor: colors[i % colors.length],
              left: `${Math.random() * 100}%`,
              top: "-40px",
            }}
            initial={{
              y: 0,
              x: Math.random() * 120 - 60,
              rotate: Math.random() * 360,
              opacity: 1,
            }}
            animate={{
              y: 520,
              x: Math.random() * 240 - 120,
              rotate: Math.random() * 1440,
              opacity: 0,
            }}
            transition={{
              duration: 2.5 + Math.random() * 2,
              ease: "easeOut",
            }}
          />
        );
      })}
    </div>
  );
};

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(
    Array(12)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        name: "Hidden Name",
        role: `Head Role ${index + 1}`,
        department: "Department Description",
        revealed: false,
      }))
  );

  const [burstId, setBurstId] = useState<number | null>(null);

  const revealedCount = teamMembers.filter((m) => m.revealed).length;

  const handleReveal = (id: number) => {
    const member = teamMembers.find((m) => m.id === id);
    if (!member || member.revealed) return;

    setBurstId(id);

    setTeamMembers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, revealed: true } : m))
    );

    setTimeout(() => setBurstId(null), 3000); // longer celebration
  };

  return (
    <section className="py-24 bg-[#050810]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">
            The <span className="text-orange-500">Masterminds</span>
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Click on a card to reveal
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-[#111626] border border-cyan-500/20 rounded-full px-6 py-2 flex gap-3">
            <span className="text-yellow-500 font-bold">
              {revealedCount}/{teamMembers.length}
            </span>
            <span className="text-cyan-400 text-xs uppercase">
              Heads Revealed
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative overflow-visible bg-[#0b1021] border border-slate-800 rounded-2xl p-6 min-h-[320px] flex flex-col items-center justify-between"
            >
              {burstId === member.id && (
                <>
                  <ConfettiBurst />
                  <ConfettiBurst /> {/* double burst for extra impact */}
                </>
              )}

              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 rounded-full border-2 overflow-hidden flex items-center justify-center ${
                      member.revealed
                        ? "border-yellow-500"
                        : "border-slate-700 bg-slate-800"
                    }`}
                  >
                    {member.revealed ? (
                      <img
                        src="https://github.com/shadcn.png"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User className="w-10 h-10 text-slate-500" />
                    )}
                  </div>

                  {!member.revealed && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#0b1021] p-1.5 rounded-full border border-slate-700">
                      <Lock className="w-4 h-4 text-yellow-500" />
                    </div>
                  )}
                </div>

                <div className="text-center space-y-1">
                  <div className="text-xs uppercase tracking-widest text-yellow-500">
                    {member.revealed ? member.name : "Hidden Name"}
                  </div>
                  <h3 className="text-white text-sm font-bold">
                    {member.role}
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    {member.department}
                  </p>
                </div>
              </div>

              {!member.revealed ? (
                <button
                  onClick={() => handleReveal(member.id)}
                  className="w-full mt-4 bg-[#1e1b12] border border-yellow-600/30 text-yellow-500 text-xs py-3 rounded-full flex items-center justify-center gap-2 hover:bg-yellow-500/10"
                >
                  <MousePointerClick className="w-4 h-4" />
                  Click To Reveal
                </button>
              ) : (
                <button className="w-full mt-4 bg-slate-800/50 border border-slate-700 text-slate-400 text-xs py-3 rounded-full flex items-center justify-center gap-2 cursor-default">
                  <Unlock className="w-4 h-4 text-green-500" />
                  Revealed
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

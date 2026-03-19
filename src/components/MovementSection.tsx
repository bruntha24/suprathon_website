import { motion } from "framer-motion";
import { Code2, Palette, Lightbulb, Heart, Award, Star, Settings, Code, Zap, Edit3, Rocket } from "lucide-react";

const MovementSection = () => {
  const communityRoles = [
    { icon: "👨‍💻", label: "Developers", gradient: "from-[#2563EB] to-[#1E40AF]" },
    { icon: "👨‍🎨", label: "Designers", gradient: "from-[#3B82F6] to-[#2563EB]" },
    { icon: "🧠", label: "Innovators", gradient: "from-[#D946EF] to-[#A21CAF]" },
    { icon: "🤝", label: "Collaborators", gradient: "from-[#F59E0B] to-[#B45309]" },
    { icon: "🎯", label: "Leaders", gradient: "from-[#EF4444] to-[#B91C1C]" },
    { icon: "🌟", label: "Achievers", gradient: "from-[#EAB308] to-[#A16207]" },
  ];

  // Based on the placeholder cards in the screenshot
  const statCards = [
    { icon: UsersIcon, color: "text-amber-400" }, // Placeholder for top left
    { icon: CodeIcon, color: "text-amber-400" }, // Placeholder for top right
    { icon: LightbulbIcon, color: "text-amber-400" }, // Placeholder for bottom left
    { icon: RocketIcon, color: "text-amber-400" }, // Placeholder for bottom right
  ];

  return (
    <section className="py-24 relative bg-[#050810]">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <div className="bg-[#1e1b12] border border-amber-500/30 px-6 py-2 rounded-full inline-flex items-center gap-2">
            <Heart className="w-3 h-3 text-amber-500" />
            <span className="text-xs text-amber-500 font-medium tracking-wide">Our Amazing Community</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">Movement</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-16 font-light"
        >
          Be part of India's most vibrant tech community where ideas flourish and
          connections are made
        </motion.p>

        {/* Floating Star Decoration */}
        <Star className="absolute top-1/4 left-[10%] text-yellow-500/20 w-8 h-8 animate-pulse" />
        <Star className="absolute bottom-1/4 right-[10%] text-cyan-500/20 w-6 h-6 animate-pulse delay-700" />


        {/* Community Icons */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 max-w-4xl mx-auto mb-20">
          {communityRoles.map((role, index) => (
            <motion.div
              key={role.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-3 group"
            >
              {/* Glow effect matching screenshot */}
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0F1629] border border-slate-800 flex items-center justify-center text-3xl md:text-4xl shadow-lg relative z-10 group-hover:border-slate-600 transition-colors`}>
                  {role.icon}
                </div>
              </div>

              <span className="text-[10px] md:text-xs text-slate-400 font-medium tracking-wide uppercase">{role.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Stat Cards Grid - Using placeholders styles with dashed lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B1221] border border-slate-800 rounded-2xl p-8 min-h-[180px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1A1F36] flex items-center justify-center mb-6 text-amber-500">
              <UsersIcon className="w-6 h-6" />
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
            <div className="mt-2 flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#0B1221] border border-slate-800 rounded-2xl p-8 min-h-[180px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1A1F36] flex items-center justify-center mb-6 text-amber-500">
              <Code className="w-6 h-6" />
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
            <div className="mt-2 flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#0B1221] border border-slate-800 rounded-2xl p-8 min-h-[180px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1A1F36] flex items-center justify-center mb-6 text-amber-500">
              <Lightbulb className="w-6 h-6" />
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
            <div className="mt-2 flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#0B1221] border border-slate-800 rounded-2xl p-8 min-h-[180px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-xl bg-[#1A1F36] flex items-center justify-center mb-6 text-amber-500">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
            <div className="mt-2 flex gap-1">
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
              <div className="w-2 h-1 bg-slate-600 rounded-full" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// Helper components for the icons if they are not imported from lucide-react directly in the same way
const UsersIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
)
const CodeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
)
const LightbulbIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
)
const RocketIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
)

export default MovementSection;

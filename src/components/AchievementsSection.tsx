import { motion } from "framer-motion";
import { Users, Clock, MapPin, CircuitBoard, Award, Globe, Trophy } from "lucide-react";

const AchievementsSection = () => {
  const stats = [
    { icon: Users, value: "500,000+", label: "Students Reached", color: "text-amber-400" },
    { icon: Clock, value: "36 Hours", label: "Non-Stop Innovation", color: "text-amber-400" },
    { icon: MapPin, value: "28+", label: "States Participating", color: "text-amber-400" },
    { icon: CircuitBoard, value: "4", label: "Innovation Tracks", color: "text-amber-400" },
  ];

  const achievements = [
    {
      icon: Award,
      title: "World Record Holder",
      description:
        "Recognized for organizing one of the largest virtual hackathons setting new standards in online tech education and competition",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20",
    },
    {
      icon: Globe,
      title: "India's Biggest Virtual Hackathon",
      subTitle: "National-level recognition",
      description:
        "Pioneering virtual innovation in the Indian tech ecosystem",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
    },
    {
      icon: Trophy,
      title: "National Level Certification",
      description:
        "Every participant receives nationally recognized certificates Partnership badges from leading tech organizations",
      color: "text-fuchsia-500",
      bgColor: "bg-fuchsia-500/10",
      borderColor: "border-fuchsia-500/20",
    },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#050810]">
      {/* Background gradient from top left */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            Building trust and excitement through a proven track record of excellence
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0b1221] border border-slate-800 rounded-2xl p-8 text-center group hover:border-slate-600 transition-all duration-300"
            >
              <div className="mb-4 flex justify-center">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-slate-400 text-sm md:text-xs uppercase tracking-wide font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-[#0b1221] border border-slate-800 rounded-2xl p-8 group hover:border-slate-700 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${achievement.bgColor} border ${achievement.borderColor}`}>
                <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
              </div>
              <h3 className={`font-display text-lg font-bold mb-2 ${achievement.color}`}>
                {achievement.title}
              </h3>
              {achievement.subTitle && (
                <p className="text-xs text-cyan-400 mb-3 uppercase tracking-wider font-semibold">{achievement.subTitle}</p>
              )}
              <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;


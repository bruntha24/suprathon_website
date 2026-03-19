import { motion } from "framer-motion";
import { Users, Lightbulb, Trophy } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Users,
      title: "Collaborate",
      description: "Connect with brilliant minds from across the nation",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
      borderColor: "border-amber-400/20",
    },
    {
      icon: Lightbulb,
      title: "Create",
      description: "Build real-world solutions using cutting-edge technologies",
      color: "text-cyan-400",
      bgColor: "bg-cyan-400/10",
      borderColor: "border-cyan-400/20",
    },
    {
      icon: Trophy,
      title: "Conquer",
      description: "Compete for recognition, prizes, and career opportunities",
      color: "text-fuchsia-500",
      bgColor: "bg-fuchsia-500/10",
      borderColor: "border-fuchsia-500/20",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#060918]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            About <span className="text-[#FFAA33]">SuPrathon Community</span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-slate-400 text-base mb-8 leading-relaxed">
            SuPrathon is more than just a hackathon — it's a{" "}
            <span className="text-amber-400 font-semibold">movement</span>. Born from the vision of
            empowering young innovators across India, we've created a platform where ideas come
            to life, skills are sharpened, and futures are built.
          </p>

          <div className="bg-[#0f152a] rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50" />

            <p className="text-slate-300 text-sm md:text-base leading-loose">
              SuPrathon brings together{" "}
              <span className="text-amber-400 font-bold">thousands of passionate minds</span> for{" "}
              <span className="text-cyan-400 font-bold">36 hours</span> of intense innovation, collaboration, and
              learning. Organized by{" "}
              <span className="text-amber-500 font-semibold">SuPrazo Technologies</span> and{" "}
           we provide a virtual stage
              where students, technologists, freelancers, and professionals transform their dreams into
              deployable solutions.
            </p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-[#0b1021] border border-slate-800 rounded-2xl p-8 text-left hover:border-slate-700 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className={`absolute -right-10 -top-10 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity duration-500`} />

              <div
                className={`w-12 h-12 mb-6 rounded-lg flex items-center justify-center ${feature.bgColor} border ${feature.borderColor}`}
              >
                <feature.icon
                  className={`w-6 h-6 ${feature.color}`}
                />
              </div>
              <h3
                className={`font-display text-xl font-bold mb-3 ${feature.color}`}
              >
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

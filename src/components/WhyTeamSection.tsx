import { motion } from "framer-motion";
import { Zap, Headphones, Heart, Clock } from "lucide-react";

const WhyTeamSection = () => {
  const features = [
    { icon: Zap, label: "Smooth registrations for thousands" },
    { icon: Headphones, label: "Technical Support at 3 AM" },
    { icon: Heart, label: "Building vibrant communities" },
    { icon: Clock, label: "28 hours of dedication" },
  ];

  return (
    <section className="py-20 relative bg-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold">
            Why This <span className="gradient-text">Team</span> Matters
          </h2>
        </motion.div>

        {/* Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto bg-card/50 border border-primary/30 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
        >
          {/* Main Message */}
          <p className="text-center text-foreground mb-6 text-sm md:text-base leading-relaxed">
            Every great hackathon needs exceptional leaders. The management team you've just met
            isn't just organizing an event — they're crafting an{" "}
            <span className="text-gold">experience</span> that will impact thousands of lives.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="w-6 h-6 mx-auto mb-1.5 text-primary" />
                <p className="text-[10px] text-muted-foreground leading-tight">{feature.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-6" />

          {/* Inspirational Message */}
          <p className="text-center text-sm md:text-base text-foreground">
            Together, we're not just running a hackathon.{" "}
            <span className="text-gold">We're building India's most powerful innovation platform.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyTeamSection;

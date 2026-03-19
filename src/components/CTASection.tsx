import { motion } from "framer-motion";
import { Sparkles, Clock, Globe, Trophy, Instagram, Linkedin, Send, MessageCircle, Twitter } from "lucide-react";

const CTASection = () => {
  const features = [
    {
      icon: Clock,
      label: "Duration",
      value: "36 Hours"
    },
    {
      icon: Globe,
      label: "Mode",
      value: "Virtual"
    },
    {
      icon: Trophy,
      label: "Prizes",
      value: "Cash + Recognition"
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "X" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <section id="register" className="py-24 relative bg-[#050810] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Ready to Be Part of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9933] via-[#FF3366] to-[#CC33FF]">Community ?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Join thousands of innovators from across India in the biggest virtual
            hackathon experience
          </p>
        </motion.div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#0b1021] border border-slate-800 rounded-2xl p-8 py-10 flex flex-col items-center justify-center hover:border-slate-700 transition-colors"
            >
              <feature.icon className="w-8 h-8 text-amber-400 mb-4" />
              <p className="text-slate-500 text-sm font-medium mb-1 uppercase tracking-wide">{feature.label}</p>
              <p className="text-white font-display font-bold text-xl md:text-2xl">{feature.value}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
      <motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="mb-12 relative inline-block group"
>
  {/* Glow behind button */}
  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-green-400 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>

  <button className="relative flex items-center justify-center gap-2 sm:gap-3
      bg-gradient-to-r from-[#FDE047] via-[#86EFAC] to-[#D8B4FE]
      text-slate-900 font-display font-bold
      text-sm sm:text-lg
      px-4 sm:px-6 md:px-8 py-3 sm:py-5 rounded-full
      hover:scale-105 transition-transform duration-300"
  >
    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-900" />
    Register for SuPrathon 2.0
    <span className="ml-1 text-sm sm:text-base">→</span>
  </button>
</motion.div>


        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full bg-[#111827] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:bg-slate-800 transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

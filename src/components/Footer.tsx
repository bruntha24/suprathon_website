import { Instagram, Linkedin, Send, MessageCircle, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  const quickLinks = ["Home", "About", "Achievements", "Team", "Register"];

  return (
    <footer className="py-16 border-t border-slate-800 bg-[#02040a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-20 justify-items-center md:justify-items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl font-bold mb-4">
              <span className="text-yellow-500">SuPrathon</span> <span className="text-pink-500">2.0</span>
            </h3>
            <p className="text-sm text-slate-400 mb-2">
              India's Biggest Virtual Hackathon
            </p>
            <p className="text-xs text-slate-500">
              "Powered by innovation, driven by community"
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white mb-6">
              Connect With Us
            </h4>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400 text-sm mb-6">
              <span className="bg-slate-800/50 p-1.5 rounded-md">✉️</span>
              <span>contact@suprathon.com</span>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Organized By */}
        <div className="text-center mb-8 border-t border-slate-800/50 pt-10">
          <p className="text-sm text-slate-500 mb-2">Organized by</p>
          <p className="font-display text-lg font-bold">
            <span className="text-yellow-400">SuPrazo Technologies</span>
            
          </p>
        </div>

        {/* Copyrights */}
        <div className="text-center pt-4">
          <p className="text-xs text-slate-600">
            @ copyrights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

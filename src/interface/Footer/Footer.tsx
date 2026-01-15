import { LucideLinkedin, LucideGithub, Mail, ArrowUp } from "lucide-react";
import { FaBehance } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LucideLinkedin className="text-yellow-200" size={18} />,
      href: "https://www.linkedin.com/in/zoulkifirou-sabi-adam-73ab0b296",
    },
    {
      name: "GitHub",
      icon: <LucideGithub className="text-yellow-200" size={18} />,
      href: "https://github.com/Zoul-Coding",
    },
    {
      name: "Gmail",
      icon: <Mail className="text-yellow-200" size={18} />,
      href: "mailto:votre.email@gmail.com", // Remplace par ton email
    },
    {
      name: "Behance",
      icon: <FaBehance className="text-yellow-200" size={18} />,
      href: "https://www.behance.net/zoulsad",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative">

      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 relative z-10">

        {/* Section réseaux sociaux */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 mb-2">Suivez-moi sur</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 px-4 h-11 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] border border-transparent hover:border-yellow-200/30"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="text-sm font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Bouton scroll to top */}
            <button
              onClick={scrollToTop}
              className="group bg-secondary hover:bg-gray-700 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] border border-gray-800 hover:border-yellow-200/50"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5 text-yellow-200 group-hover:translate-y-[-2px] transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright et crédits */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              © {currentYear} Zoulkifirou SABI ADAM. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
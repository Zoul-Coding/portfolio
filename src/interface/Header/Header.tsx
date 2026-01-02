import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { AlignJustify,/*  X */ } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../public/assets/img/logo.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  // Fonction pour surveiller le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Détecter la section active au scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Fonction pour gérer le scroll vers les sections
  const handleScrollToSection = (e:any, href:any) => {
    e.preventDefault();
    closeDialog(); // Fermer le menu mobile

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-background/80 shadow-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center xl:px-0 px-5 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="w-10 h-auto transition-transform duration-300 group-hover:scale-110"
            src={Logo}
            alt="Logo"
          />
          <h2 className="text-2xl font-bold text-white group-hover:text-yellow-200 transition-colors">
            zoul
          </h2>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollToSection(e, link.href)}
                className={`relative text-base font-medium transition-all duration-300 group ${
                  isActive
                    ? "text-yellow-200"
                    : "text-gray-300 hover:text-yellow-200"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-200 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}

          {/* Bouton CTA */}
          <a href="#contact">
            <button className="bg-yellow-200 text-black px-6 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-105">
              Discutons
            </button>
          </a>
        </div>

        {/* Burger Menu Mobile */}
        <div className="lg:hidden">
          <Dialog open={isOpen} onOpenChange={closeDialog}>
            <button
              onClick={openDialog}
              className="text-gray-300 hover:text-yellow-200 transition-colors p-2"
              aria-label="Ouvrir le menu"
            >
              <AlignJustify size={24} />
            </button>

            <DialogContent
              className={`fixed left-0 right-0 top-0 border-b border-gray-800 border-t-0 border-r-0 border-l-0 w-full translate-x-0 bg-background/95 backdrop-blur-md transform transition-all duration-300 ease-in-out ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-4 opacity-0"
              }`}
            >
              {/* Bouton fermer */}
             {/*  <button
                onClick={closeDialog}
                className="absolute top-4 right-5 text-gray-300 hover:text-yellow-200"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button> */}

              {/* Navigation Mobile */}
              <nav className="flex flex-col space-y-6 pt-8 pb-6">
                {navLinks.map((link) => {
                  const sectionId = link.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleScrollToSection(e, link.href)}
                      className={`text-lg font-medium transition-colors flex items-center gap-3 group ${
                        isActive
                          ? "text-yellow-200"
                          : "text-gray-300 hover:text-yellow-200"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-yellow-200 scale-100"
                            : "bg-gray-700 scale-0 group-hover:scale-100"
                        }`}
                      ></span>
                      {link.name}
                    </a>
                  );
                })}

                {/* CTA Mobile */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    handleScrollToSection(e, "#contact");
                  }}
                  className="mt-4"
                >
                  <button className="w-full bg-yellow-200 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition-all duration-300">
                    Discutons ensemble
                  </button>
                </a>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Header;

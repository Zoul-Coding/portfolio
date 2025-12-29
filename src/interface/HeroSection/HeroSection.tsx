/* import { CardSpotlight } from "@/components/ui/card-spotlight-static";
 */ import {
  ArrowDown,
  Download,
  Sparkles /* LucideLinkedin, LucideGithub, Mail */,
} from "lucide-react";
/* import { FaBehance } from "react-icons/fa"; */
import Cv from "../../../public/assets/files/Cv_Zoulkifirou_SABI_ADAM.pdf";

export function HeroSection() {
  /*  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <LucideLinkedin className="text-yellow-200" size={20} />,
      href: "https://www.linkedin.com/in/zoulkifirou-sabi-adam-73ab0b296",
    },
    {
      name: "GitHub",
      icon: <LucideGithub className="text-yellow-200" size={20} />,
      href: "https://github.com/Zoul-Coding",
    },
    {
      name: "Gmail",
      icon: <Mail className="text-yellow-200" size={20} />,
      href: "mailto:zoulkifirousabiadam@gmail.com",
    },
    {
      name: "Behance",
      icon: <FaBehance className="text-yellow-200" size={20} />,
      href: "https://www.behance.net/zoulsad",
    },
  ]; */

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200/10 via-transparent to-transparent"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-80 h-80 bg-yellow-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>{" "}
      </div>

      {/*  <CardSpotlight className="flex items-center justify-center w-full md:h-[116vh] h-[100vh] relative"> */}
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="flex flex-col justify-center h-screen items-center pt-20">
          <div className="z-40 relative">
            {/* Badge animé */}
            <div className="flex justify-center mb-6 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 md:px-4 px-3 py-2 rounded-full bg-yellow-200/10 border border-yellow-200/20 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-yellow-200 animate-pulse" />
                <span className="text-yellow-200 text-sm font-medium">
                  Disponible pour des missions freelance
                </span>
              </div>
            </div>

            {/* Titre avec animation */}
            <h1 className="md:text-5xl text-3xl text-center font-poppins relative z-0 text-white animate-fade-in-up">
              <span className="inline-block hover:scale-105 transition-transform duration-300">
                Zoulkifirou SABI ADAM
              </span>
              <br />
              <span className="text-yellow-200 inline-block  mt-4 pb-4 px-2 animate-gradient bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-[length:200%_auto]">
                Développeur web front-end et concepteur UX/UI
              </span>
            </h1>

            {/* Description avec animation */}
            <p className="text-gray-200 font-inter max-w-screen-md mx-auto font-normal md:text-2xl text-xl text-center leading-relaxed animate-fade-in opacity-0 animation-delay-200">
              Je conçois et développe des interfaces modernes et performantes
              qui offrent des expériences utilisateur fluides et intuitives.
              {/*  De la conception UX/UI au développement front-end, je donne vie
                aux idées avec des solutions numériques centrées sur
                l'utilisateur. */}
            </p>

            {/* Boutons avec animations */}
            <div className="flex md:flex-row flex-col items-center justify-center gap-4 pt-8 animate-fade-in opacity-0 animation-delay-400">
              <a
                href="#projects"
                className="group relative px-12 h-12 rounded-xl font-poppins bg-yellow-200 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center overflow-hidden hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Découvrez mes projets
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href={Cv}
                download
                className="group relative px-12 h-12 font-poppins rounded-xl bg-gray-800 text-yellow-200 font-semibold border border-gray-700 hover:border-yellow-200 transition-all duration-300 flex items-center hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Téléchargez mon CV
                </span>
              </a>
            </div>

            {/* Social links animés */}
            {/*  <div className="flex flex-wrap justify-center gap-3 pt-10 animate-fade-in opacity-0 animation-delay-600">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-secondary hover:bg-gray-700 flex items-center justify-center gap-2 px-4 h-10 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] border border-transparent hover:border-yellow-200/30"
                    style={{ 
                      animation: 'fade-in 0.8s ease-out forwards',
                      animationDelay: `${600 + index * 100}ms`,
                      opacity: 0
                    }}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <p className="text-sm font-poppins text-white">{social.name}</p>
                  </a>
                ))}
              </div>
 */}
            {/* Scroll indicator animé */}
            {/* <div className="hidden md:flex justify-center pt-12 animate-bounce">
              <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
                <span className="text-sm">Scroll down</span>
                <ArrowDown className="w-5 h-5" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/*  </CardSpotlight> */}
    </section>
  );
}

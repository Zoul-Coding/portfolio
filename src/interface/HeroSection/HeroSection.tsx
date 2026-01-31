import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight-static";
export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <CardSpotlight className="flex items-center justify-center w-full md:h-[116vh] h-[100vh] relative">
        <div className="max-w-screen-lg mx-auto px-3">
          <div className="flex flex-col justify-center h-screen items-center ">
            <div className="z-40 relative">
              {/* Badge animé */}
              <div className="flex justify-center mb-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 md:px-4 px-3 py-2 rounded-full bg-yellow-200/10 border border-yellow-200/20 backdrop-blur-sm"
                >
                  <span className="text-yellow-200 text-sm font-medium">
                    Disponible pour des missions freelance
                  </span>
                </motion.div>
              </div>

              {/* Titre avec animation */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:text-5xl text-3xl text-center font-poppins relative z-0 text-white"
              >
                <span className="inline-block hover:scale-105 transition-transform duration-300">
                  Zoulkifirou SABI ADAM
                </span>
                <br />
                <span className="text-yellow-200 inline-block  mt-4 pb-4 px-2 animate-gradient bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-200 bg-clip-text text-transparent bg-[length:200%_auto]">
                  Développeur web front-end
                </span>
              </motion.h1>

              {/* Description avec animation */}
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-200 font-inter max-w-screen-md mx-auto font-normal md:text-2xl text-xl text-center leading-relaxed"
              >
                Je transforme des idées et des maquettes en interfaces web
                rapides, intuitives et optimisées pour l'expérience utilisateur.
              </motion.p>

              {/* Boutons avec animations */}
              <div className="flex md:flex-row flex-col items-center justify-center gap-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                   <a
                  href="#contact"
                  className="group relative px-12 h-12 rounded-xl font-poppins bg-yellow-200 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center overflow-hidden hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Discutons de votre projet
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
                </motion.div>
               
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#projects"
                    className="group relative px-12 h-12 font-poppins rounded-xl bg-gray-800 text-yellow-200 font-semibold border border-gray-700 hover:border-yellow-200 transition-all duration-300 flex items-center hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Voir mes réalisations
                    </span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </CardSpotlight>
    </section>
  );
}

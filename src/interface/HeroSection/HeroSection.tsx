import CV from "../../../public/assets/files/Cv_Zoulkifirou_SABI_ADAM.pdf";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient animé */}
      {/*  <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-200/10 via-transparent to-transparent"></div>
      </div> */}

      {/* Particules flottantes */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-80 h-80 bg-yellow-200/10 rounded-full blur-3xl animate-pulse delay-500"></div>{" "}
      </div>
 */}
      {/*  <CardSpotlight className="flex items-center justify-center w-full md:h-[116vh] h-[100vh] relative"> */}
      <div className="max-w-screen-lg mx-auto px-3">
        <div className="flex flex-col justify-center h-screen items-center pt-20">
          <div className="z-40 relative">
            {/* Badge animé */}
            <div className="flex justify-center mb-6 animate-fade-in-down">
              <div className="inline-flex items-center gap-2 md:px-4 px-3 py-2 rounded-full bg-yellow-200/10 border border-yellow-200/20 backdrop-blur-sm">
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
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>

              <a
                href={CV}
                download
                className="group relative px-12 h-12 font-poppins rounded-xl bg-gray-800 text-yellow-200 font-semibold border border-gray-700 hover:border-yellow-200 transition-all duration-300 flex items-center hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Téléchargez mon CV
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  </CardSpotlight> */}
    </section>
  );
}

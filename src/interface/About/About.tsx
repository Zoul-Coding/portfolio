import React from "react";
import { Code, Palette, Rocket, Users, Award, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Profile from "../../../public/assets/img/profile_full.png";

const About = () => {
  const values = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code de qualité",
      description:
        "Je développe des solutions robustes, maintenables et scalables avec les meilleures pratiques.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design moderne",
      description:
        "Je crée des interfaces élégantes et intuitives qui offrent une expérience utilisateur exceptionnelle.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Performance optimale",
      description:
        "J'optimise chaque aspect pour garantir des applications rapides et efficaces.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "Je travaille en étroite collaboration avec les clients pour concrétiser leur vision.",
    },
  ];

  return (
    <section
      id="about"
      className="scroll-mt-20 py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="text-yellow-200">moi</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Passionné par le développement web et la création d'expériences
            digitales uniques
          </p>
        </div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 items-start gap-12 mb-20">
          {/* Image et info */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-200/20 to-transparent p-1">
              <div className="bg-secondary rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-yellow-200/10 to-transparent rounded-xl flex items-center justify-center">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>
                    ) => {
                      const img = e.currentTarget;
                      img.style.display = "none";
                      const sibling =
                        img.nextElementSibling as HTMLElement | null;
                      if (sibling) sibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center">
                    <Award className="w-32 h-32 text-yellow-200/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Badge flottant */}
            <div className="absolute -top-4 -right-4 bg-yellow-200 text-black px-6 py-3 rounded-full font-bold shadow-lg rotate-3 hidden md:block">
              Disponible pour des projets
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                👋 Salut ! Je suis un{" "}
                <span className="text-yellow-200 font-semibold">
                  Développeur Frontend & Designer UX/UI
                </span>
                , passionné par la création d’expériences digitales utiles,
                intuitives et performantes. J’accompagne les projets de l’idée
                jusqu’à une interface fonctionnelle et centrée utilisateur.
              </p>

              <p>
                💡 J’interviens sur le{" "}
                <span className="text-yellow-200 font-semibold">
                  développement front-end
                </span>{" "}
                avec
                <span className="text-yellow-200 font-semibold"> React</span> et
                <span className="text-yellow-200 font-semibold"> Next.js</span>,
                en assurant une intégration{" "}
                <span className="text-yellow-200 font-semibold">
                  pixel-perfect
                </span>{" "}
                des maquettes conçues sur{" "}
                <span className="text-yellow-200 font-semibold">Figma</span>.
                J’utilise{" "}
                <span className="text-yellow-200 font-semibold">
                  Tailwind CSS
                </span>{" "}
                pour créer des interfaces modernes, accessibles et responsives.
              </p>

              <p>
                🎯 Côté{" "}
                <span className="text-yellow-200 font-semibold">UX/UI</span>, je
                m’appuie sur la recherche utilisateur, la structuration des
                parcours, le wireframing et le prototypage pour concevoir des
                expériences claires, orientées conversion et alignées avec les
                objectifs business.
              </p>

              <p>
                🚀 Curieux et en apprentissage continu, je combine{" "}
                <span className="text-yellow-200 font-semibold">technique</span>
                et <span className="text-yellow-200 font-semibold">
                  design
                </span>{" "}
                pour livrer des solutions digitales cohérentes, performantes et
                à forte valeur ajoutée.
              </p>
            </div>

            {/* Tags de compétences */}
            {/*  <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Tailwind CSS",
                "Next.js",
                "MongoDB",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-full text-sm font-medium border border-gray-700 hover:border-yellow-200 hover:text-yellow-200 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div> */}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact">
                <Button className="bg-yellow-200 text-black hover:bg-yellow-300 px-6 h-12 text-base font-medium rounded-xl">
                  Contactez-moi
                </Button>
              </a>
              <a href="/cv.pdf" download>
                <Button
                  variant="outline"
                  className="border-gray-700 hover:bg-secondary px-6 h-12 text-base font-medium rounded-xl"
                >
                  <BookOpen className="mr-2 w-5 h-5" />
                  Télécharger mon CV
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Valeurs et approche */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Mon approche de <span className="text-yellow-200">travail</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-secondary rounded-xl p-6 border border-gray-800 hover:border-yellow-200/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className="text-yellow-200 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline / Parcours (Optionnel) */}
        {/*    <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Mon <span className="text-yellow-200">parcours</span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2024",
                title: "Développeur Full Stack Freelance",
                description:
                  "Création de solutions web sur mesure pour divers clients internationaux.",
              },
              {
                year: "2022",
                title: "Développeur Front-end",
                description:
                  "Développement d'interfaces utilisateur modernes et responsive pour des startups.",
              },
              {
                year: "2020",
                title: "Début dans le développement web",
                description:
                  "Formation intensive et premiers projets personnels en HTML, CSS, et JavaScript.",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-200 text-black flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                    {item.year}
                  </div>
                  {index !== 2 && (
                    <div className="w-0.5 h-full bg-gradient-to-b from-yellow-200 to-transparent mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;

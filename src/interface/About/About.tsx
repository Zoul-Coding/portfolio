import React from "react";
import {
  Code,
  Palette,
  Rocket,
  Users,
  Award,
  Code2,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Profile from "../../../public/assets/img/profile_full.webp";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import ReactImg from "../../../public/assets/img/react.svg";
import TailwindImg from "../../../public/assets/img/tailwind-css.svg";
import TypeScriptImg from "../../../public/assets/img/typescript.svg";
import GitImg from "../../../public/assets/img/Skills/git.png";
import GitHubImg from "../../../public/assets/img/Skills/github.svg";
import NextJsImg from "../../../public/assets/img/Skills/next-js.svg";
import AngularImg from "../../../public/assets/img/Skills/angular.png";
import FigmaImg from "../../../public/assets/img/Skills/figma.png";
import ApiImg from "../../../public/assets/img/Skills/api.svg";
import CV from "../../../public/assets/files/Cv_Zoulkifirou_SABI_ADAM.pdf";

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

  const skillCategories = {
    frontend: {
      title: "Front-End",
      icon: <Code2 className="w-6 h-6" />,
      color: "text-blue-400",
      skills: [
        { name: "React", img: ReactImg },
        { name: "Next.js", img: NextJsImg },
        { name: "TypeScript", img: TypeScriptImg },
        { name: "Angular", img: AngularImg },
      ],
    },
    design: {
      title: "Design",
      icon: <Palette className="w-6 h-6" />,
      color: "text-purple-400",
      skills: [
        { name: "Tailwind CSS", img: TailwindImg },
        { name: "Figma", img: FigmaImg },
      ],
    },
    tools: {
      title: "Outils",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-orange-400",
      skills: [
        { name: "Git", img: GitImg },
        { name: "GitHub", img: GitHubImg },
        { name: "API REST", img: ApiImg },
      ],
    },
  };

  // Toutes les compétences pour le marquee
  const allSkills = Object.values(skillCategories).flatMap((cat) => cat.skills);

  return (
    <section
      id="about"
      className="scroll-mt-20 py-16 md:py-24"
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
          </div>

          {/* Description */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Salut ! Je suis un{" "}
                <span className="text-yellow-200 font-semibold">
                  Développeur Frontend & Designer UX/UI
                </span>
                , passionné par la création d’expériences digitales utiles,
                intuitives et performantes. J’accompagne les projets de l’idée
                jusqu’à une interface fonctionnelle et centrée utilisateur.
              </p>

              <p>
                J’interviens sur le{" "}
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
                Côté{" "}
                <span className="text-yellow-200 font-semibold">UX/UI</span>, je
                m’appuie sur la recherche utilisateur, la structuration des
                parcours, le wireframing et le prototypage pour concevoir des
                expériences claires, orientées conversion et alignées avec les
                objectifs business.
              </p>

              <p>
                Curieux et en apprentissage continu, je combine{" "}
                <span className="text-yellow-200 font-semibold">technique</span> {" "}
                et <span className="text-yellow-200 font-semibold">
                  design
                </span>{" "}
                pour livrer des solutions digitales cohérentes, performantes et
                à forte valeur ajoutée.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact">
                <Button className="bg-yellow-200 text-black hover:bg-yellow-300 px-6 h-12 text-base font-medium rounded-xl">
                  Contactez-moi
                </Button>
              </a>
              <a href={CV} download>
                <Button
                  variant="outline"
                  className="border-gray-700 hover:bg-secondary px-6 h-12 text-base font-medium rounded-xl"
                >
                  {/*  <BookOpen className="mr-2 w-5 h-5" /> */}
                  Télécharger mon CV
                </Button>
              </a>
            </div>
          </div>
        </div>

          {/* Marquee des compétences */}
      <div className="relative">
        <Marquee className="mb-20">
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent>
            {allSkills.map((skill, index) => (
              <MarqueeItem
                className="flex flex-col items-center justify-center mx-6"
                key={index}
              >
                <div className="group relative">
                  <div className="absolute inset-0 bg-yellow-200/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-secondary rounded-2xl p-6 border border-gray-800 group-hover:border-yellow-200/50 transition-all duration-300 w-32 h-32 flex flex-col items-center justify-center">
                    <img
                      alt={skill.name}
                      className="w-16 h-16 object-contain mb-2 group-hover:scale-110 transition-transform"
                      src={skill.img}
                    />
                    <p className="text-white text-center font-medium text-sm">
                      {skill.name}
                    </p>
                  </div>
                </div>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
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
      </div>
    </section>
  );
};

export default About;

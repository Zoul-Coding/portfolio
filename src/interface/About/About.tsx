import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  Users,
  Award,
  Code2,
  Wrench,
} from "lucide-react";
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
      title: "Interfaces modernes et accessibles",
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

  // container et cardVariant pour les animations Framer Motion
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 0.9,
      },
    },
  };

  return (
    <section id="about" className="scroll-mt-20 py-16 md:py-24">
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À propos de <span className="text-yellow-200">moi</span>
          </h2>
        </motion.div>

        {/* Contenu principal */}
        <div className="grid lg:grid-cols-2 items-start gap-12 mb-20">
          {/* Image et info */}
          <motion.div
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-200/20 to-transparent p-1">
              <div className="bg-secondary rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-yellow-200/10 to-transparent rounded-xl flex items-center justify-center">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-xl"
                    onError={(
                      e: React.SyntheticEvent<HTMLImageElement, Event>,
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
          </motion.div>

          {/* Description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4 text-gray-300 text-lg leading-relaxed"
            >
              <p>
                Je suis développeur front-end spécialisé dans la création
                <span className="text-yellow-200 font-semibold">
                  {" "}
                  d’interfaces web modernes, performantes et pensées pour
                  l’utilisateur
                </span>
                . J’accompagne les projets de l’idée jusqu’à une interface
                fonctionnelle, rapide et alignée avec les objectifs du produit.
              </p>

              <p>
                Je développe des interfaces avec{" "}
                <span className="text-yellow-200 font-semibold">React</span> et{" "}
                <span className="text-yellow-200 font-semibold">Next.js</span>{" "}
                en assurant une intégration fidèle des maquettes et une
                expérience fluide sur tous les supports. J’utilise{" "}
                <span className="text-yellow-200 font-semibold">
                  Tailwind CSS
                </span>{" "}
                pour concevoir des interfaces modernes, accessibles et
                optimisées pour la performance.
              </p>

              <p>
                Dans mon approche, je prends en compte{" "}
                <span className="text-yellow-200 font-semibold">
                  l’expérience utilisateur
                </span>{" "}
                en travaillant sur la structuration des parcours, la clarté des
                interfaces et la fluidité des interactions afin de faciliter
                l’usage et améliorer l’engagement des utilisateurs.
              </p>

              <p>
                J’accorde une grande importance à la{" "}
                <span className="text-yellow-200 font-semibold">
                  qualité du code
                </span>
                , à la{" "}
                <span className="text-yellow-200 font-semibold">
                  performance
                </span>{" "}
                et à la{" "}
                <span className="text-yellow-200 font-semibold">
                  cohérence globale des interfaces
                </span>{" "}
                afin de livrer des produits fiables, évolutifs et agréables à
                utiliser.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
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
          <motion.h3
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Mon approche de <span className="text-yellow-200">travail</span>
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariant}
                className="bg-secondary rounded-xl p-6 border border-gray-800 hover:border-yellow-200/50 transition-all hover:transform hover:scale-105 group"
              >
                <div className="text-yellow-200 mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>

                <h4 className="text-xl font-bold mb-3">{value.title}</h4>

                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
import { Code2, Palette,/*  Database, */ Wrench } from "lucide-react";
import ReactImg from "../../../public/assets/img/react.svg";
import TailwindImg from "../../../public/assets/img/tailwind-css.svg";
import TypeScriptImg from "../../../public/assets/img/typescript.svg";
import GitImg from "../../../public/assets/img/Skills/git.png";
import GitHubImg from "../../../public/assets/img/Skills/github.svg";
import NextJsImg from "../../../public/assets/img/Skills/next-js.svg";
import AngularImg from "../../../public/assets/img/Skills/angular.png";
import FigmaImg from "../../../public/assets/img/Skills/figma.png";
import ApiImg from "../../../public/assets/img/Skills/api.svg";

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
const allSkills = Object.values(skillCategories).flatMap(cat => cat.skills);

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 py-16 md:py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Particules d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-200/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 mb-16">
          <h2 className="md:text-5xl text-4xl font-bold text-center">
            Mes <span className="text-yellow-200">compétences</span>
          </h2>
          <p className="text-muted-foreground text-center font-normal md:text-2xl text-xl leading-relaxed max-w-2xl mx-auto">
            Les technologies et outils que je maîtrise pour créer des expériences web exceptionnelles
          </p>
        </div>

        {/* Catégories de compétences */}
      {/*   <div className="grid md:grid-cols-3 gap-6 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div
              key={key}
              className="group bg-secondary rounded-xl p-6 border border-gray-800 hover:border-yellow-200/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center p-3 bg-background rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-12 h-12 object-contain mb-2"
                    />
                    <span className="text-sm text-gray-300 text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* Marquee des compétences */}
        <div className="relative">
          <Marquee className="py-8">
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

        {/* Section stats / badge (optionnel) */}
       {/*  <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-secondary/50 rounded-xl p-6 border border-gray-800">
            <div className="text-4xl font-bold text-yellow-200 mb-2">9+</div>
            <div className="text-gray-400">Technologies maîtrisées</div>
          </div>
          <div className="bg-secondary/50 rounded-xl p-6 border border-gray-800">
            <div className="text-4xl font-bold text-yellow-200 mb-2">3+</div>
            <div className="text-gray-400">Années d'expérience</div>
          </div>
          <div className="bg-secondary/50 rounded-xl p-6 border border-gray-800">
            <div className="text-4xl font-bold text-yellow-200 mb-2">50+</div>
            <div className="text-gray-400">Projets réalisés</div>
          </div>
        </div> */}

        {/* Call to action */}
       {/*  <div className="mt-16 text-center">
          <p className="text-xl text-gray-400 mb-6">
            Toujours en apprentissage de nouvelles technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Node.js", "MongoDB", "Docker", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-secondary rounded-full text-sm border border-gray-700 text-gray-400"
              >
                📚 En cours : {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
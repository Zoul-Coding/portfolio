import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { projectsData } from "../../data/ProjectData";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Projects = () => {
  // Fonction pour rendre les icônes de technologies
  const renderTechIcon = (iconName: any, color: any) => {
    switch (iconName) {
      case "FaReact":
        return <FaReact className={`text-${color}`} size={14} />;
      case "RiTailwindCssFill":
        return <RiTailwindCssFill className={`text-${color}`} size={14} />;
      default:
        return null;
    }
  };

  // container et cardVariant pour les animations Framer Motion
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.9,
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
    <section id="projects" className="scroll-mt-20 py-16 md:py-24 relative">
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 relative z-10">
        {/* Header avec animation */}
        <div className="text-center mb-16 animate-fade-in-up">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:text-5xl text-4xl font-bold mb-4"
          >
            Mes <span className="text-yellow-200">projets</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground font-normal md:text-2xl text-xl leading-relaxed max-w-2xl mx-auto"
          >
            Découvrez mes réalisations et projets personnels
          </motion.p>
        </div>

        {/* Grille de projets */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariant}
              className="group animate-fade-in opacity-0"
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <Card className="bg-secondary border-none h-[560px] flex flex-col rounded-xl shadow-2xl overflow-hidden hover:shadow-[0_0_50px_rgba(250,204,21,0.15)] transition-all duration-500 hover:transform hover:scale-[1.02]">
                {/* Image avec overlay */}
                <Link
                  to={`/project/${project.id}`}
                  className="relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full md:h-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-yellow-200 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ExternalLink size={18} />
                      Voir le projet
                    </div>
                  </div>
                </Link>

                <CardSpotlight className="w-full px-0 py-0 flex-1 flex flex-col">
                  <div className="relative z-10 flex-1 flex flex-col">
                    <CardHeader className="pt-4 pb-0">
                      <Link to={`/project/${project.id}`}>
                        <CardTitle className="text-2xl font-bold mb-3 hover:text-yellow-200 transition-colors line-clamp-2">
                          {project.title}
                        </CardTitle>
                      </Link>

                      {/* Technologies */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`bg-${tech.bg} flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl border border-gray-700 hover:border-yellow-200/50 transition-all duration-300 hover:scale-105`}
                            >
                              {renderTechIcon(tech.icon, tech.color)}
                              <p
                                className={`text-xs text-${tech.color} font-bold`}
                              >
                                {tech.name}
                              </p>
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-lg">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </CardHeader>

                    {/* Description */}
                    <CardContent className="pt-4 pb-6 flex-grow">
                      <p className="text-gray-300 font-normal text-lg leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </CardContent>

                    {/* Footer avec liens */}
                    <CardFooter className=" flex flex-col gap-4">
                      {/* Liens GitHub et Live */}
                      {(project.githubLink || project.liveLink) && (
                        <div className="flex items-center gap-4 text-sm">
                          {project.githubLink && project.githubLink !== "" && (
                            <>
                              <a
                                className="text-gray-400 hover:text-yellow-200 transition-colors flex items-center gap-2 group/link"
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub className="group-hover/link:scale-110 transition-transform" />
                                <span>Code source</span>
                              </a>
                              {project.liveLink && (
                                <span className="text-gray-600">•</span>
                              )}
                            </>
                          )}
                        </div>
                      )}

                      {/* Boutons d'action */}
                      <div className="flex items-center gap-3 w-full">
                        {project.liveLink && (
                          <a
                            className="flex-1 h-11 text-center font-poppins rounded-xl bg-gray-800 text-yellow-200 font-semibold border border-gray-700 hover:border-yellow-200 hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="inline">Démo</span>
                          </a>
                        )}

                        <Link to={`/project/${project.id}`} className="flex-1">
                          <Button className="w-full h-11 rounded-xl font-poppins bg-yellow-200 text-black font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:scale-105">
                            Détails
                          </Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </div>
                </CardSpotlight>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

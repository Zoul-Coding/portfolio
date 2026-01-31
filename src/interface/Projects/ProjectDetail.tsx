import { motion } from "framer-motion";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projectsData } from "../../data/ProjectData";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "../Footer/Footer";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Trouver le projet correspondant
  const project = projectsData.find((p: any) => p.id === projectId);

  // Si le projet n'existe pas, rediriger ou afficher une erreur
  if (!project) {
    return (
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 pt-16 pb-16 min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <p className="text-gray-500 mb-8">
            The project you are looking for does not exist.
          </p>
          <Link to="/">
            <Button className="bg-yellow-200 text-black hover:bg-yellow-300">
              Return to projects
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Fonction pour rendre les icônes de technologies
  const renderTechIcon = (iconName: any, color: any, size = 12) => {
    const iconProps = { className: `text-${color}`, size };
    switch (iconName) {
      case "FaReact":
        return <FaReact {...iconProps} />;
      case "RiTailwindCssFill":
        return <RiTailwindCssFill {...iconProps} />;
      default:
        return null;
    }
  };

  // container et cardVariant pour les animations Framer Motion
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour */}
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 pt-8">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 flex items-center gap-2 hover:bg-secondary rounded-xl"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </Button>
      </div>

      {/* Contenu principal */}
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5">
        <div className="lg:grid grid-cols-7 items-center gap-8">
          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 lg:col-span-4"
          >
            <img
              src={project.imageDetail}
              alt={project.title}
              className="lg:w-full w-full h-full object-cover"
            />
          </motion.div>

          <div className="w-full lg:col-span-3">
            {/* Titre et sous-titre */}
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-gray-400"
              >
                {project.shortDescription}
              </motion.p>
            </div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`bg-${tech.bg} flex items-center justify-center gap-2 px-3 py-2 rounded-xl`}
                >
                  {renderTechIcon(tech.icon, tech.color)}
                  <p className={`text-[12px] text-${tech.color} font-bold`}>
                    {tech.name}
                  </p>
                </span>
              ))}
            </motion.div>

            {/* Informations du projet */}
            {(project.duration || project.role) && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6 mb-12 p-6 bg-secondary rounded-xl"
              >
                {project.duration && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">
                      Durée
                    </p>
                    <p className="text-xl font-semibold">{project.duration}</p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">
                      Rôle
                    </p>
                    <p className="text-xl font-semibold">{project.role}</p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Liens rapides */}
            <div className="flex flex-wrap gap-4 mb-12">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[200x]"
                >
                  <Button className="w-full bg-secondary hover:bg-secondary/80 flex items-center justify-center gap-2 h-12 rounded-xl">
                    Voir le code source
                  </Button>
                </a>
              )}
              {project.liveLink && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[200px]"
                  >
                    <Button className="w-full bg-yellow-200 text-black hover:bg-yellow-300 flex items-center justify-center gap-2 h-12 rounded-xl">
                      Visiter le site
                    </Button>
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Description complète */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            À propos du projet
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            {project.fullDescription}
          </motion.p>
        </div>

        {/* Fonctionnalités */}
        {project.features && project.features.length > 0 && (
          <div className="mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Fonctionnalités principales
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-4"
            >
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-yellow-200 text-2xl font-bold mt-1">
                    •
                  </span>
                  <span className="text-lg text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Défis et apprentissages */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Défis rencontrés</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.challenges}
              </p>
            </motion.div>
          )}
          {project.learnings && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-secondary rounded-xl"
            >
              <h2 className="text-2xl font-bold mb-4">Ce que j'ai appris</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.learnings}
              </p>
            </motion.div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;

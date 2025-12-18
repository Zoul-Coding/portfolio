// src/pages/ProjectDetail.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projectsData } from '../../data/ProjectData';
import { FaReact, FaGithub, FaLink } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Footer from '../Footer/Footer';

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
          <p className="text-gray-500 mb-8">The project you are looking for does not exist.</p>
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
  const renderTechIcon = (iconName:any, color:any, size = 12) => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Header avec bouton retour */}
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 pt-8">
        <Button
          onClick={() => navigate('/')}
          variant="ghost"
          className="mb-8 flex items-center gap-2 hover:bg-secondary rounded-xl"
        >
          <ArrowLeft size={20} />
          Return to projects
        </Button>
      </div>

      {/* Contenu principal */}
      <div className="max-w-screen-xl mx-auto xl:px-0 px-5 pb-0">
         {/* Image principale */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-[600px] object-cover rounded-xl shadow-2xl"
          />
        </div>

        {/* Titre et sous-titre */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-400">{project.shortDescription}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className={`bg-${tech.bg} flex items-center justify-center gap-2 px-3 py-2 rounded-xl`}
            >
              {renderTechIcon(tech.icon, tech.color)}
              <p className={`text-[12px] text-${tech.color} font-bold`}>{tech.name}</p>
            </span>
          ))}
        </div>

        
        {/* Informations du projet */}
        {(project.duration || project.role) && (
          <div className="grid md:grid-cols-2 gap-6 mb-12 p-6 bg-secondary rounded-xl">
            {project.duration && (
              <div>
                <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Durée</p>
                <p className="text-2xl font-semibold">{project.duration}</p>
              </div>
            )}
            {project.role && (
              <div>
                <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Rôle</p>
                <p className="text-2xl font-semibold">{project.role}</p>
              </div>
            )}
          </div>
        )}

        {/* Liens rapides */}
        <div className="flex flex-wrap gap-4 mb-12">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px]"
            >
              <Button className="w-full bg-secondary hover:bg-secondary/80 flex items-center justify-center gap-2 h-12 rounded-xl">
                <FaGithub size={20} />
                Voir le code source
              </Button>
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px]"
            >
              <Button className="w-full bg-yellow-200 text-black hover:bg-yellow-300 flex items-center justify-center gap-2 h-12 rounded-xl">
                <FaLink size={18} />
                Visiter le site
              </Button>
            </a>
          )}
        </div>

        {/* Description complète */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">À propos du projet</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Fonctionnalités */}
        {project.features && project.features.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Fonctionnalités principales</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-xl hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-yellow-200 text-2xl font-bold mt-1">•</span>
                  <span className="text-lg text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Défis et apprentissages */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {project.challenges && (
            <div className="p-6 bg-secondary rounded-xl">
              <h2 className="text-2xl font-bold mb-4">🎯 Défis rencontrés</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.challenges}
              </p>
            </div>
          )}
          {project.learnings && (
            <div className="p-6 bg-secondary rounded-xl">
              <h2 className="text-2xl font-bold mb-4">💡 Ce que j'ai appris</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {project.learnings}
              </p>
            </div>
          )}
        </div>

        {/* Galerie d'images supplémentaires (si disponibles) */}
        {project.images && project.images.length > 1 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Photos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${project.title} - Image ${index + 2}`}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform cursor-pointer rounded-xl shadow-2xl"
                />
              ))}
            </div>
          </div>
        )}

        {/* Call to action final */}
    {/*     <div className="text-center pt-12 border-t border-gray-800">
          <h3 className="text-2xl font-bold mb-4">Intéressé par ce projet ?</h3>
          <p className="text-gray-400 mb-6">N'hésitez pas à consulter le code ou à visiter le site en ligne.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-secondary hover:bg-secondary/80 flex items-center gap-2">
                  <FaGithub size={20} />
                  Code source
                </Button>
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-200 text-black hover:bg-yellow-300 flex items-center gap-2 rounded-xl">
                  <FaLink size={18} />
                  Site en ligne
                </Button>
              </a>
            )}
          </div>
        </div> */}

       <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
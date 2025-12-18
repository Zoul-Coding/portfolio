import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { FaReact, FaGithub, FaLink } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "../../data/ProjectData";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Projects = () => {
  // Fonction pour rendre les icônes de technologies
  const renderTechIcon = (iconName: any, color: any) => {
    switch (iconName) {
      case "FaReact":
        return <FaReact className={`text-${color}`} size={10} />;
      case "RiTailwindCssFill":
        return <RiTailwindCssFill className={`text-${color}`} size={10} />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto xl:px-0 px-5 pt-16 pb-16">
      <div>
        <h3 className="text-3xl font-bold text-center">Projects</h3>
        <p className="text-muted-foreground text-center font-normal text-2xl leading-[28px] pt-2">
          Discover my projects and personal work
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-12">
          {projectsData.map((project: any) => (
            <Card
              key={project.id}
              className="bg-secondary border-none h-[520px] flex flex-col rounded-xl shadow-2xl"
            >
              <Link to={`/project/${project.id}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:h-56 h-72 rounded-t-[8px] rounded-b-0 object-cover"
                />
              </Link>

              <CardSpotlight className="w-full px-0 py-0">
                <div className="relative z-10">
                  <CardHeader className="pt-4 pb-0">
                    <Link to={`/project/${project.id}`}>
                      <CardTitle className="text-2xl font-bold mb-2 hover:underline">
                        {project.title}
                      </CardTitle>
                    </Link>
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.technologies
                        .slice(0, 2)
                        .map((tech: any, index: any) => (
                          <span
                            key={index}
                            className={`bg-${tech.bg} flex items-center justify-center gap-2 px-2 py-1 rounded-[8px]`}
                          >
                            {renderTechIcon(tech.icon, tech.color)}
                            <p
                              className={`text-[12px] text-${tech.color} font-bold`}
                            >
                              {tech.name}
                            </p>
                          </span>
                        ))}
                      {project.technologies.length > 2 && (
                        <span className="text-[12px] text-gray-400">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4 pb-6 flex-grow">
                    <p className="text-gray-300 font-normal text-xl leading-[28px] line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </CardContent>

                  <CardFooter className="pt-0 pb-6 flex flex-col items-start mt-auto">
                    <div className="flex items-center gap-4">
                      {project.githubLink && project.githubLink !== "" && (
                        <div className="">
                          <a
                            className="text-yellow-200 hover:opacity-80 text-sm flex items-center gap-3"
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="text-sm text-white" />
                            Github
                          </a>
                        </div>
                      )}
                      {project.githubLink && project.githubLink !== "" && (
                        <span>-</span>
                      )}
                      {/*  {project.liveLink && (
                        <div className="">
                          <a
                            className="text-yellow-200 hover:opacity-80 text-sm flex items-center gap-3"
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLink className="text-sm text-white" />
                            Live Site
                          </a>
                        </div>
                      )} */}
                    </div>

                    <div className="pt-4 w-full flex items-center gap-6">
                      <a
                        className="w-full h-12 text-center font-poppins rounded-xl bg-gray-800 text-yellow-200 font-semibold hover:opacity-80 hover:bg-gray-800 transition flex items-center justify-center gap-3"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Site
                        <FaLink className="text-sm text-yellow-200" />
                      </a>
                      <Link to={`/project/${project.id}`}>
                        <Button className="w-full h-12 rounded-xl font-poppins bg-yellow-200 text-black font-semibold hover:opacity-80 hover:bg-yellow-200 transition flex items-center gap-3">
                          View Details
                          <ArrowUpRight />
                        </Button>
                      </Link>
                    </div>
                  </CardFooter>
                </div>
              </CardSpotlight>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

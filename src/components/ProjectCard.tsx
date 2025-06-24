import { motion } from "framer-motion";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 hover:shadow-2xl transition-shadow flex flex-col shadow-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={project.imagem}
        alt={project.title}
        className="rounded-md mb-4 object-cover h-48 w-full"
      />
      <div className="flex flex-col flex-grow">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {project.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        arial-label={`Ver projeto ${project.title}`}
        className="mt-auto inline-block
                 text-indigo-600 
                   font-semibold 
                   hover:underline"
      >
        Ver Projeto
      </a>
    </motion.div>
  );
}

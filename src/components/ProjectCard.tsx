import { motion } from "framer-motion";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-white rbg-white rounded-2xl shadow-lg overflow-hidden p-6 hover:shadow-2xl transition-shadow flex flex-colounded-x1 shadow-lg overflow-hidden p-4 cursor-pointer"
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src={project.imagem}
        alt={project.title}
        className="rounded-md mb4 object-cover h-48 w-full"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block text-indigo-600 font-semibold hover:underline justify-center gap-4 mb-8"
      >
        Ver Projeto
      </a>
    </motion.div>
  );
}

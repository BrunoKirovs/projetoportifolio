import { motion } from "framer-motion";
import { ExperienceTimeline } from "../components/ExperienceTimeLine";

export function About() {
  return (
    
    <section className="container mx-auto px-6 py-12 flex flex-col items-center text-center">
      {/* Foto animada */}
      <motion.img
        src="/assets/Foto.jpg"
        alt="Foto de Bruno Juan"
        className="w-40 h-40 rounded-full object-cover shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      />

      {/* Apresentação */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mb-12"
      >
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Sobre Mim</h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          Olá! Me chamo Bruno Juan, tenho 25 anos e sou apaixonado por tecnologia. 
          Estou em constante evolução como desenvolvedor. Este portfólio 
          é uma vitrine dos meus projetos, estudos e progressos.
        </p>
      </motion.div>
    <ExperienceTimeline />
    </section>
  );
}


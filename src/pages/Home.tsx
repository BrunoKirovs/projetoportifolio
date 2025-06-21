import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export function Home() {

  return (
    <section className="w-full bg-white dark:bg-gray-900 px-4 py-20 md:px-8">
      {/* Hero */}
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Olá, eu sou <span className="text-blue-600">Bruno Juan</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Desenvolvedor apaixonado para obter mais conhecimento em interfaces modernas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex gap-4 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Ver Projetos
          </Link>
          <a
            href="https://www.linkedin.com/in/brunojuan/"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Entrar em Contato
          </a>
        </motion.div>
      </div>
 
    </section>
  );
}
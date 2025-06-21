import { motion } from "framer-motion";
import { ExperienceTimeline } from "../components/ExperienceTimeLine";
import { Certificates } from "../components/Certificates";

export function About() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 px-4 py-16 md:px-8">
      <h2 className="text-4x1 md:text-5x1 font-bold text-center mb-16 text-gray-800 dark:text-white">
        Sobre mim
      </h2>

      <div className="max-w-7x1 mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Certificados */}
        <div className="flex-1 flex flex-col gap-10">
          {/*Abount*/}
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src="/assets/Foto.jpg"
              alt="Foto de Bruno Juan"
              className="w-44 h-44 rounded-full object-cover shadow-lg"
              whileHover={{ scale: 1.05 }}
            />

            <div className="mt-6 md:mt-0 md:ml-6 max-w-x1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Bruno Juan
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Tenho 25 anos e sou apaixonado por tecnologia. Estou em
                constante evolução como desenvolvedor. Este portfólio é uma
                vitrine dos meus projetos, estudos e progressos.
              </p>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Veja o que estou estudando no momento:
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React"
              />

              <img
                src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />

              <img
                src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"
                alt="Java"
              />

              <img
                src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
                alt="Cypress"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Ferramentas que já possuo conhecimento:
            </p>

            {/* Seção de ícones */}
            <div className="flex flex-wrap justify-center gap-4">
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt="React"
              />
              <img
                src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TypeScript"
              />
              <img
                src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="TailwindCSS"
              />
              <img
                src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"
                alt="Git"
              />
              <img
                src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"
                alt="GitHub"
              />
              <img
                src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"
                alt="Python"
              />

              <img
                src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white"
                alt="Java"
              />

              <img
                src="https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white"
                alt="C#"
              />

              <img
                src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white"
                alt="Cypress"
              />

              <img
                src="https://img.shields.io/badge/SQL-003B57?style=for-the-badge&logo=sqlite&logoColor=white"
                alt="SQL"
              />

              <img
                src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
                alt="JavaScript"
              />
            </div>

          </div>

          <Certificates />
        </div>

        {/* Coluna da Direita */}
        <div className="flex-1 max-w-2x1 w-full">
          <ExperienceTimeline />
        </div>

      </div>
    </section>
  );
}

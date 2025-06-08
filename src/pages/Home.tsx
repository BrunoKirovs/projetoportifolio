export function Home() {
  return (
    <section className=" flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Bem-vindo ao meu Portfólio
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Vejam meus projetos e conheçam um pouco sobre mim. Sou um jovem
          desenvolvedor em evolução. Veja o que estou estudando no momento:
        </p>

        <p className="flex flex-wrap justify-center gap-4 mb-8">
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
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Ferramentas que já possuo conhecimento:
        </p>

        {/* Seção de ícones */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        <div className="flex justify-center gap-4 flex-wrap"></div>
      </div>
    </section>
  );
}

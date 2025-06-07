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

        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="React"
        />

        <p>Ferramentas que já possuo conhecimento:</p>

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
        </div>

        <div className="flex justify-center gap-4 flex-wrap"></div>
      </div>
    </section>
  );
}

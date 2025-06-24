import { motion } from "framer-motion";

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  link: string;
};

const certificates: Certificate[] = [
  {
    title: "React: desenvolvendo com JavaScript",
    issuer: "Alura",
    year: "2025",
    link: "https://cursos.alura.com.br/certificate/874a45c0-8689-47ec-bf3d-5901d6f8288b?lang",
  },
  {
    title: "Formação Engenharia de Software",
    issuer: "Alura",
    year: "2025",
    link: "https://cursos.alura.com.br/degree/certificate/c74e1335-a75d-48bf-8d8b-d1cac4a91e9f?lang",
  },
  {
    title: "Tailwind CSS: estilizando página com classes utilitárias",
    issuer: "Alura",
    year: "2025",
    link: "https://cursos.alura.com.br/certificate/9b4dfcb8-a6d9-47eb-9193-221c20bf7cbf?lang",
  },
  {
    title: "MySQL",
    issuer: "Alura",
    year: "2025",
    link: "https://cursos.alura.com.br/certificate/7a8d4af2-c2c1-4c11-b3c3-03a28a2115fc?lang",
  },
  {
    title: "Quality Assurance: plano de testes e gestão de bugs",
    issuer: "Alura",
    year: "2025",
    link: "https://cursos.alura.com.br/certificate/93c27115-210e-4079-a25f-ea7c64819ca9?lang",
  },
  {
    title: "Microsserviços: Padrões de Projeto",
    issuer: "Alura",
    year: "2025",
    link: "https://cursos.alura.com.br/certificate/ac75339f-7f77-4d7c-adfd-79f5da37acc6?lang",
  },
];

export function Certificates() {
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
        Certificados
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => (
          <motion.a
            key={idx}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <h4 className="text-lg font-bold text-gray-800 dark:text-white">
              {cert.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              {cert.issuer} • {cert.year}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

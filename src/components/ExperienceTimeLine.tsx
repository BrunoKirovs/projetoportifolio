import { motion } from "framer-motion";

const experiences = [
  {
    year: "2020 - 2022",
    company: "Muvii Tecnologia",
    role: "Estágiario de TI",
    description:
      "Atendimento de suporte Service Desk presencial e através da ferramenta de acesso remoto Teamviewer,Windows Server 2008, 2012 e 2016, Controle de Telefonia Pbx Jive (GoTo), Controle de acesso através Active Directory (AD),Controle do ambiente através do Firewall Fortigate, Acesso a servidores via VMware, Microsoft Office 365, Microsoft Azure Backup.",
  },
  {
    year: "2022 - 2024",
    company: "Commcor DTVM",
    role: "Analista de Ti JR III",
    description:
      "Suporte de atendimento Service Desk, Telefonia Tadiran, GrandStream PBX e Etrali, Conhecimento do Sistema Sinacor, Transferência de arquivos via WinSCP, Monitoramento de todos os serviços internos utilizados na empresa via monitor Zabbix, Alterações de código do site via PHP e WordPress, Controle de rede e do ambiente através do Fortigate, Configurações de VPN via Forticlient, Controle de acesso e pastas via Active Directory (AD), Manutenção dos servidores de Backup, Controle de acessos aos sistemas Backoffice, Risco e Operações, Analise de incidentes através de logs gerados pelo nosso controle de firewall, Consultas em SQL,Controle de gravações de mensageria e ligações para fins de auditoria, Disponibilidade de evidencias para processos de auditoria interna, Controle mensageria Bloomberg.",
  },
  {
    year: "2024 - Atual",
    company: "Analista de Sistemas JR",
    role: "Master Corretora",
    description:
      "Conhecimento do Sistema Sinacor, manutenção e controle de aplicações de pacote de atualização, Conhecimento do Sistema Inoa, manutenção e controle de pacote de atualização, Controle de acessos via Active Directory (AD), Acesso ao Portal AWS, Controle de fluxo de criação de acessos aos sistemas utilizados na corretora, Fluxo de processo de GMUDS, Scripts de consulta em SQL, Monitoramento de todos os serviços internos utilizados na empresa via monitor Zabbix e Datadog, Controle de gravações de mensageria e ligações para solicitações de trilha de auditoria, Disponibilidade de evidencias para processos de auditoria interna",
  },
];

export function ExperienceTimeline() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Experiência Profissional
      </h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
              {exp.year}
            </h3>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              {exp.role}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {exp.company}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

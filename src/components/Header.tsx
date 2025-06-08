import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Sobre", path: "/about" },
  { label: "Projetos", path: "/projects" },
];

export function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-center items-center w-screen">
      <h1 className="text-2x1 font-bold px-4 w-1/2">Santuario</h1>

      <div>
        <p className="text-2x1 justify-center p-4 m-1/2">
          Pensando em ideias para arrumar esse cabeçario
        </p>
        <div className="flex justify-center gap-4"></div>
      </div>
      <nav className="flex space-x-4">
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                location.pathname === item.path
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-indigo-600"
              }`}
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  );
}

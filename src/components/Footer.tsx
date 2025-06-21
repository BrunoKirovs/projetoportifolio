import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-gray-900 text-white py-6 px-4 border-t border-gray-700 text-center ">
      <p className="text-sm">&copy; {year} Desenvolvido por Bruno Juan - Engennier Developer</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/BrunoKirovs/" target="_blank" aria-label="GitHub">
          <Github className="w-5 h-5 hover:text-blue-400" />
        </a>
        <a href="https://www.linkedin.com/in/brunojuan/" target="_blank" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5 hover:text-blue-400" />
        </a>
      </div>
    </footer>
  );
}

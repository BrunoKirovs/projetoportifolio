import { Header } from "./components/Header.tsx";
import { Home } from "./pages/Home.tsx";
import { Footer } from "./components/Footer.tsx";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About.tsx";
import { Projects } from "./pages/Projects.tsx";
import { ThemeToggle } from "./components/ThemeToggle.ts";

//<div className="bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text min-h-screen flex items-center justify-center gap-4">
      //  <ThemeToggle />
      //</div>*/

function App() {
  return (
    <div className="flex flex-col">

      <Header />
      <div className="flex-grow px-4 pt-24">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

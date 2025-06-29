import { Header } from "./components/Header.tsx";
import { Home } from "./pages/Home.tsx";
import { Footer } from "./components/Footer.tsx";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "./pages/About.tsx";
import { Projects } from "./pages/Projects.tsx";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow px-4 pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;

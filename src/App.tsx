// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./interface/Header/Header";
import { HeroSection } from "./interface/HeroSection/HeroSection";
import Projects from "./interface/Projects/Projects";
import Skills from "./interface/Skills/Skills";
import Contact from "./interface/Contact/Contact";
import ProjectDetail from "./interface/Projects/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

// Page d'accueil avec toutes les sections
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Page de détails d'un projet */}
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;

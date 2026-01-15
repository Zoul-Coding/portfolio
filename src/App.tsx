// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Header from "./interface/Header/Header";
import { HeroSection } from "./interface/HeroSection/HeroSection";
import Projects from "./interface/Projects/Projects";
import Contact from "./interface/Contact/Contact";
import ProjectDetail from "./interface/Projects/ProjectDetail";
import Footer from "./interface/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop";
import About from "./interface/About/About";

// Page d'accueil avec toutes les sections
const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
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

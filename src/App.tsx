import Header from "./interface/Header/Header"
import { HeroSection } from "./interface/HeroSection/HeroSection"
import Projects from "./interface/Projects/Projects"
import Skills from "./interface/Skills/Skills"
import Contact from "./interface/Contact/Contact"

function App() {
  return (
    <div className="mx-auto w-full h-full">
      <Header />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

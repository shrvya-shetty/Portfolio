import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Education } from "./components/Education/Education"
import { Works } from "./components/Works/Works"
import { Achievements } from "./components/Achivements/Achivements"
import { Certifications } from "./components/Certification/Certification"



function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Hero />
       <About />

       <Education />
      
      <Experience />
      <Works />
      <Projects />
      <Achievements/>
      <Certifications/>
      <Contact />  
    </div>
  );
}

export default App

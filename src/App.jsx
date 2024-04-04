import styles from "./App.module.css"
import { About } from "./components/About/About"
import { Contact } from "./components/Contact/Contact"
import { Experience } from "./components/Experience/Experience"
import { Hero } from "./components/Hero/Hero"
import { Navbar } from "./components/Navbar/Navbar"
import { Projects } from "./components/Projects/Projects"
import { Education } from "./components/Education/Education"
import { Works } from "./components/Works/Works"



function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      
      <Hero />
      <Education />
      <About />
      
      <Experience />
      <Works />
      <Projects />
      <Contact />
    </div>
  );
}

export default App

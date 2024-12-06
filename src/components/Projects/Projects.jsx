import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      {/* View All Button */}
      <a
        href="https://github.com/shrvya-shetty" // Replace this with your GitHub profile URL
        className={styles.viewAllButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        View All
      </a>
    </section>
  );
};

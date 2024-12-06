import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Who I am</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/image2.jpeg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              I'm an aspiring frontend developer interested in creating responsive and optimized websites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3> Full-Stack Web Developer</h3>
              <p>
              I am a passionate web developer skilled in crafting responsive user interfaces and building efficient, scalable backend systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>ML Developer</h3>
              <p>
              I am a machine learning developer with extensive experience in numerous projects within the same domain.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

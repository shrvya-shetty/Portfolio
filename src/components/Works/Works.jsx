import React from "react";
import styles from "./Works.module.css";

export const Works = () => {
  return (
    <section className={styles.container} id="Works">
      <h2 className={styles.title}>Work Experience</h2>
      <br></br>
      <div className={styles.content}>
        
        {/* New Work Experience */}
        <div className={styles.workItem}>
          <div className={styles.workItemContent}>
            <h5>September 2024 - Present</h5>
            <h3>Web Developer</h3>
            <p>AgPotato Trading Pvt. Ltd.</p>
            <ul>
              <li>Designed and developed the company website to facilitate efficient trading of potatoes.</li>
              <li>Implemented a responsive and user-friendly interface using React.js and Tailwind CSS.</li>
              <li>Optimized the backend system with Node.js to handle real-time data transactions.</li>
              <li>Deployed the website on a cloud platform ensuring scalability and high availability.</li>
            </ul>
            <p className={styles.skills}>
              Skills: React.js, Tailwind CSS, Node.js, Cloud Deployment, Full-Stack Development
            </p>
          </div>
        </div>

        
        <div className={styles.workItem}>
          <div className={styles.workItemContent}>
            <h5>Jan 2024 - Feb 2024</h5>
            <h3>Full Stack Developer Intern</h3>
            <p>Exposys Data Labs, Bangalore</p>
            <ul>
              <li>Developed a full-stack web application to detect Distributed Denial of Service (DDoS) attacks using entropy computing.</li>
              <li>HTML/CSS for frontend, Flask for backend: process HTTP requests, compute entropy, handle data packets.</li>
              <li>Managed a relational database schema for storing DDoS attack data and accuracy testing results.</li>
            </ul>
            <p className={styles.skills}>
              Skills: MySQL, Flask, DDoS, HTML, CSS, Machine Learning, Entropy, HTTP, Web Application
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

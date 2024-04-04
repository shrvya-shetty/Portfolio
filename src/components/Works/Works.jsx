import React from "react";
import styles from "./Works.module.css"; // Import the CSS module for styling

export const Works = () => {
  return (
    <section className={styles.container} id="Works">
      <h2 className={styles.title}>Work Experience</h2>
      <br></br>
      <div className={styles.content}>
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
            <p className={styles.skills}>Skills: MySQL, Flask, DDoS, HTML, CSS, Machine Learning, Entropy, HTTP, Web Application</p>
          </div>
        </div>
        {/* Add more work experience cards as needed */}
        
        
        {/* Add more work experience cards as needed */}
      </div>
    </section>
  );
};

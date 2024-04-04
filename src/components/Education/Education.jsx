// Education.js

import React from "react";
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
   
    <section className={styles.container} id="education">
      <br></br>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles.educationCard}>
         
          <div className={styles.educationCardContent}>
          <h5>2022-2024</h5>
          <br></br>
            <h3>Master's in Computer Applications</h3>
            <a>9.40 CGPA</a>
            <p>N.M.A.M. Institute of Technology, Nitte</p>
          </div>
        </div>
        <div className={styles.educationCard}>
          
          <div className={styles.educationCardContent}>
          <h5>2019-2022</h5>
          <br></br>
            <h3>Bachelor's in Computer Applications </h3>
            <a>9.54 CGPA</a>
            <p>Shri Bhuvanendra College,Karkala</p>
          </div>
        </div>
        {/* Add more education cards as needed */}
      </div>
    </section>
  );
};

import React, { useEffect, useRef } from "react";
import styles from "./Education.module.css";

export const Education = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={`${styles.container}`} id="education" ref={sectionRef}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles.educationCard}>
          <div className={styles.educationCardContent}>
            <h5>2022-2024</h5>
            <h3>Master's in Computer Applications</h3>
            <a>9.40 CGPA</a>
            <p>N.M.A.M. Institute of Technology, Nitte</p>
          </div>
        </div>
        <div className={styles.educationCard}>
          <div className={styles.educationCardContent}>
            <h5>2019-2022</h5>
            <h3>Bachelor's in Computer Applications</h3>
            <a>9.54 CGPA</a>
            <p>Shri Bhuvanendra College, Karkala</p>
          </div>
        </div>
      </div>
    </section>
  );
};

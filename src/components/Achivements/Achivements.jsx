import React, { useEffect } from "react";
import styles from "./Achivements.module.css"; // The CSS file for the page
import { getImageUrl } from "../../utils";

export const Achievements = () => {
  useEffect(() => {
    // Adding animation class on scroll
    const achievements = document.querySelectorAll(`.${styles.achievement}`);
    const handleScroll = () => {
      achievements.forEach((achievement) => {
        if (achievement.getBoundingClientRect().top < window.innerHeight) {
          achievement.classList.add(styles.animate);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.achievementsContainer} id="Achivements">
      {/* Creative container around everything */}
      <div className={styles.achievementsWrapper}>
        <h1 className={styles.title}>My Achievements</h1>
        <div className={styles.achievementsContent}>
          {/* Left side with 3 boxes */}
          <div className={styles.achievementsList}>
            <div className={`${styles.achievement} ${styles.boxOne}`}>
              <h2 className={styles.achievementTitle}>SAMCA Secretary</h2>
              <p className={styles.achievementDescription}>
              Served as the MCA Student Council Secretary, effectively representing the student community while showcasing exceptional leadership, strategic decision-making, and the ability to foster collaboration among peers.
              </p>
            </div>
            <div className={`${styles.achievement} ${styles.boxTwo}`}>
              <h2 className={styles.achievementTitle}>Awarded at Project Expo</h2>
              <p className={styles.achievementDescription}>
              Honored with an award at the MCA Nitte Project Expo for the 'COVID-19 Detection' project. Commended for technical proficiency, effective project management, unwavering dedication, and punctual delivery of tasks.              </p>
            </div>
            <div className={`${styles.achievement} ${styles.boxThree}`}>
              <h2 className={styles.achievementTitle}>IEEE Publication on COVID-19 Detection</h2>
              <p className={styles.achievementDescription}>
              Published the research paper "COVID-19 Detection Using CNN" in IEEE, representing Nitte Meenakshi Institute of Technology, showcasing innovative use of CNNs for accurate COVID-19 detection.              </p>
            </div>
          </div>
          {/* Right side with photo */}
          <div className={styles.photoContainer}>
            <img
              src={getImageUrl("hero/image3.jpeg")}
              alt="Your Name"
              className={styles.photo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

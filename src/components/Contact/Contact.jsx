import React from "react";
import styles from "./Contact.module.css"; // Import the CSS file for styling
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contactSection}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out to me!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/gmail.png")}
              alt="Email icon"
              className={styles.icon}
            />
            <a href="mailto:shravyashetty159@gmail.com">shravyashetty159@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/link.png")}
              alt="LinkedIn icon"
              className={styles.icon}
            />
            <a href="https://www.linkedin.com/in/shravya29/">
              linkedin.com/shravya29
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/git.png")}
              alt="Github icon"
              className={styles.icon}
            />
            <a href="https://github.com/shrvya-shetty">github.com/shrvya-shetty</a>
          </li>
        </ul>
      </div>

      {/* Quick Links Section */}
      <div className={styles.quickLinksSection}>
        <h3>Quick Links</h3>
        <ul className={styles.quickLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Skills</a></li>
          <li><a href="#Works">Experience</a></li>
          <li><a href="#Cerification">Certificate</a></li>

          <li><a href="#Achivements">Achivements</a></li>

        </ul>
      </div>
    </footer>
  );
};

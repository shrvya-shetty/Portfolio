import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h3 className={styles.overlayTitle}>{title}</h3>
          <p className={styles.overlayDescription}>{description}</p>
        </div>
      </div>
      <div className={styles.links}>
        {/* Ensure demo and source are valid URLs */}
        <a
          href={demo || source} // If demo exists, use it, otherwise fallback to source
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        
      </div>
    </div>
  );
};

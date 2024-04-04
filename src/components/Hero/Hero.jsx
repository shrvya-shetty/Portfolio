import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shravya</h1>
        <p className={styles.description}>
        Passionate individual eager to embark on dynamic projects and contribute to groundbreaking initiatives. Reach out if you'd like to learn more!
        </p>
        <div>
        <a href="mailto:shravyashetty159@gmail.com" className={styles.contactBtn}>
          Contact Me
          </a> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <a href="https://drive.google.com/file/d/1-smK9cnSHEdXHfg3g5SrAeXnw9j6Rg9G/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
        </div>
        
      </div>
      
      <img
        src={getImageUrl("hero/her1.png")}
        alt="Image of me"
        className={styles.heroImg}
      />
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      
    </section>
  
  );
};

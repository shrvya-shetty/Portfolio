import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shravya</h1>
        <p className={styles.description}>
        Passionate web developer with a keen eye for design and a strong foundation in building dynamic, user-friendly applications. Excited to collaborate on innovative projects and bring creative ideas to life. Let’s connect and create something extraordinary!
        </p>
        <div>
        <div className={styles.buttonContainer}>

        <a href="mailto:shravyashetty159@gmail.com" className={styles.contactBtn}>
          Contact Me
          </a> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
        <a href="https://drive.google.com/file/d/1k0hRsxxQ__rEN9Yr3gGUkf_buVO7yCaO/view?usp=sharing" className={styles.contactBtn1}>
          Resume
        </a>
        </div>
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

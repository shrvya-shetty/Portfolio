import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <button
        className={styles.menuBtn}
        onClick={handleMenuToggle}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <img
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
        />
      </button>
      <ul
        className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
        onClick={handleMenuClose}
      >
        <li>
          <a href="#about" className={styles.itemvalue}>About</a>
        </li>
        <li>
          <a href="#education"  className={styles.itemvalue}>Education</a>
        </li>
        <li>
          <a href="#experience"  className={styles.itemvalue}>Skill</a>
        </li>
        <li>
          <a href="#Works"  className={styles.itemvalue}>Experience</a>
        </li>
        <li>
          <a href="#projects"  className={styles.itemvalue}>Projects</a>
        </li>
        <li>
          <a href="#Achivements"  className={styles.itemvalue}>Achievements</a>
        </li>
        <li>
          <a href="#Cerification"  className={styles.itemvalue}>Certification</a>
        </li>
        <li>
          <a href="#contact"  className={styles.itemvalue}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

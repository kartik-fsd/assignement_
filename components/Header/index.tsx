"use client";

import { useState } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav
          className={styles.nav}
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className={styles.logo}>
            <h2>LOGO</h2>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`${styles.navLinks} ${
              isMobileMenuOpen ? styles.navLinksOpen : ""
            }`}
          >
            <a href="#" className={styles.navLink}>
              SHOP
            </a>
            <a href="#" className={styles.navLink}>
              SKILLS
            </a>
            <a href="#" className={styles.navLink}>
              STORIES
            </a>
            <a href="#" className={styles.navLink}>
              ABOUT
            </a>
            <a href="#" className={styles.navLink}>
              CONTACT US
            </a>
          </div>

          {/* Header Icons */}
          <div className={styles.headerIcons}>
            <button
              className={styles.iconButton}
              aria-label="Search products"
              type="button"
            >
              <span
                className={styles.icon}
                role="img"
                aria-label="Search"
              ></span>
            </button>
            <button
              className={styles.iconButton}
              aria-label="View favorites"
              type="button"
            >
              <span
                className={styles.icon}
                role="img"
                aria-label="Favorites"
              ></span>
            </button>
            <button
              className={styles.iconButton}
              aria-label="View shopping bag"
              type="button"
            >
              <span
                className={styles.icon}
                role="img"
                aria-label="Shopping bag"
              ></span>
            </button>
            <button
              className={styles.iconButton}
              aria-label="User account"
              type="button"
            >
              <span className={styles.icon} role="img" aria-label="User"></span>
            </button>
            <div className={styles.language} aria-label="Language: English">
              ENG
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={styles.mobileMenuToggle}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              type="button"
            >
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
              <span className={styles.hamburger}></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

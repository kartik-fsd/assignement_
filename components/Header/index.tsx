"use client";

import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import styles from "./Header.module.css";
import TopBanner from "./TopBanner";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <TopBanner />
      <header className={styles.header}>
        <div className={styles.container}>
          {/* Top Row - Menu Icon, Logo, Icons */}
          <div className={styles.topRow}>
            {/* Left - Menu Icon (Mobile) */}
            <div className={styles.leftSection}>
              <button
                className={styles.mobileMenuToggle}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
                aria-expanded={isMobileMenuOpen}
                type="button"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
              <div className={styles.logoIcon}>
                <Image
                  src="/Logo.svg"
                  alt="Company Logo"
                  className={styles.logoImage}
                  width={100}
                  height={40}
                />
              </div>
            </div>

            {/* Center - Logo */}
            <div className={styles.logo}>
              <h1>LOGO</h1>
            </div>

            {/* Right - Icons */}
            <div className={styles.headerIcons}>
              <button
                className={styles.iconButton}
                aria-label="Search products"
                type="button"
              >
                <Search size={18} />
              </button>
              <button
                className={styles.iconButton}
                aria-label="View favorites"
                type="button"
              >
                <Heart size={18} />
              </button>
              <button
                className={styles.iconButton}
                aria-label="View shopping bag"
                type="button"
              >
                <ShoppingBag size={18} />
              </button>
              <button
                className={styles.iconButton}
                aria-label="User account"
                type="button"
              >
                <User size={18} />
              </button>
              <div className={styles.language} aria-label="Language: English">
                <span>ENG</span>
                <ChevronDown className={styles.languageArrow} size={8} />
              </div>
            </div>
          </div>

          {/* Bottom Row - Navigation */}
          <nav
            className={`${styles.navRow} ${
              isMobileMenuOpen ? styles.navLinksOpen : ""
            }`}
            role="navigation"
            aria-label="Main navigation"
          >
            <div className={styles.navLinks}>
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
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

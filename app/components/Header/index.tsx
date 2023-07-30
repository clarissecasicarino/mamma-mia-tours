import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Mamma Mia Tours</Link>
      </div>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <button className={styles.signup}>Sign Up</button>
      </nav>
      <div className={styles.hamburger} onClick={handleMenuToggle}>
        <div
          className={`${styles.bar} text-12 ${isMenuOpen ? styles.open : ""}`}
        />
        <div
          className={`${styles.bar} text-12 ${isMenuOpen ? styles.open : ""}`}
        />
        <div
          className={`${styles.bar} text-12 ${isMenuOpen ? styles.open : ""}`}
        />
      </div>
    </header>
  );
};

export default Header;

"use client"
import Link from "next/link";
import { ReactElement, useCallback, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Header(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const router = useRouter();

  const navigateToSignUpPage = useCallback(() => {
    router.push("/signup");
  }, [router]);

  return (
    <header className={`${styles.header}`}>
      {/* note: dont change desktop:px-[232px] */}
      <div className="flex justify-between items-center px-2 tablet:px-4 laptop:px-6 desktop:px-[232px]">
        <div className={`${styles.logo} text-22 laptop:text-24`}>
          <Link href="/">Mamma Mia Tours</Link>
        </div>
        <nav
          className={`${styles.nav} ${
            isMenuOpen ? styles.open : ""
          } flex justify-end`}
        >
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <button className={styles.signup} onClick={navigateToSignUpPage}>Sign Up</button>
        </nav>
        {/*  */}
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
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { ReactElement, useCallback, useState } from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import { HiViewGridAdd, HiX } from "react-icons/hi";
import { IconContext } from "react-icons";

export default function Header(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const router = useRouter();

  const navigateToSignUpPage = useCallback(() => {
    router.push("/signup");
  }, [router]);

  return (
    <header className="bg-secondaryPurple sticky top-0 z-0 font-body">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="text-22 laptop:text-24 font-bold px-2 text-primaryPurple pl-6 tablet:pl-8 laptop:pl-10">
          <Link href="/">Mamma Mia Tours</Link>
        </div>
        <nav className="hidden tablet:flex space-x-4 items-center pr-0 tablet:pr-8 laptop:pr-10 text-14 tablet:text-16 font-medium">
          <Link href="/about" className="hover:text-primaryPurple">
            About
          </Link>
          <Link href="/contact" className="hover:text-primaryPurple">
            Contact
          </Link>
          <button className={`${styles.signup}`} onClick={navigateToSignUpPage}>
            Sign Up
          </button>
        </nav>
        <div className="tablet:hidden">
          <button className="text-primaryPurple p-2 pr-6" onClick={toggleMenu}>
            <IconContext.Provider value={{ size: "1.25rem" }}>
              {isMenuOpen ? <HiX /> : <HiViewGridAdd />}
            </IconContext.Provider>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="flex flex-col laptop:hidden bg-secondaryPurple py-2 justify-center items-center">
          <Link href="/about" className="hover:text-primaryPurple py-2">
            About
          </Link>
          <Link href="/contact" className="hover:text-primaryPurple py-2">
            Contact
          </Link>
          <div className="py-2">
            <button
              className={`${styles.signup}`}
              onClick={navigateToSignUpPage}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

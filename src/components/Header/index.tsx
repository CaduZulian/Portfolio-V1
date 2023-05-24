"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// context
import { useAppContext } from "@/context/AppContext";

// icons
import { Menu, X } from "react-feather";

// styles
import styles from "./styles.module.scss";

export default function Header() {
  const { languages, language, setLanguage } = useAppContext();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const changeLanguage = () => {
    const index = languages.findIndex((lang) => lang.name === language.name);
    const nextIndex = index === languages.length - 1 ? 0 : index + 1;

    setLanguage(languages[nextIndex]);
  };

  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <Link href={"/"}>CaduZulian.dev</Link>
      </h1>

      <div className={styles.buttonsGroup}>
        <Link href={"#about"}>About me</Link>
        <Link href={"#carrer"}>Carrer</Link>
        <Link href={"#projects"}>Projects</Link>
        <Link href={"#contact-me"}>Contact me</Link>

        <button className={styles.changeLang} onClick={changeLanguage}>
          <Image src={language.icon} alt="language icon" />
        </button>
      </div>

      <button className={styles.menuButton} onClick={() => setMenuIsOpen(true)}>
        <Menu />
      </button>

      <section className={styles.menu} style={menuIsOpen ? { right: 0 } : {}}>
        <div className={styles.row}>
          <button className={styles.changeLang} onClick={changeLanguage}>
            <Image src={language.icon} alt="language icon" />
          </button>

          <button
            className={styles.onCloseButton}
            onClick={() => setMenuIsOpen(false)}
          >
            <X />
          </button>
        </div>

        <div className={styles.buttonsList}>
          <Link href={"#about"}>About me</Link>
          <Link href={"#carrer"}>Carrer</Link>
          <Link href={"#projects"}>Projects</Link>
          <Link href={"#contact-me"}>Contact me</Link>
        </div>
      </section>
    </header>
  );
}

'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { languages } from '@/constants';

// context
import { useAppContext } from '@/context/AppContext';

// components
import MenuSidebar from './components/MenuSidebar';

// icons
import { Menu } from 'react-feather';

// styles
import styles from './styles.module.scss';

export default function Header() {
  const { t, setMenuIsOpen, menuIsOpen, language, setLanguage } =
    useAppContext();

  const changeLanguage = () => {
    const index = languages.findIndex((lang) => lang.name === language.name);
    const nextIndex = index === languages.length - 1 ? 0 : index + 1;

    setLanguage(languages[nextIndex]);
  };

  const menuItems = useMemo(() => {
    return ['about', 'carrer', 'projects', 'contactMe'] as const;
  }, []);

  return (
    <>
      <header
        className={styles.container}
        style={menuIsOpen ? { filter: 'blur(0.5rem)' } : {}}
      >
        <h1 className={styles.logo}>
          <Link href={'/'}>{t.siteName}</Link>
        </h1>

        <div className={styles.buttonsGroup}>
          {menuItems.map((item) => (
            <Link href={`#${item}`} key={item}>
              {t.header[item]}
            </Link>
          ))}

          <button className={styles.changeLang} onClick={changeLanguage}>
            <Image src={language.icon} alt={t.header.languageButtonAlt} />
          </button>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setMenuIsOpen(true)}
        >
          <Menu />
        </button>
      </header>
      <MenuSidebar changeLanguage={changeLanguage} menuItems={menuItems} />
    </>
  );
}

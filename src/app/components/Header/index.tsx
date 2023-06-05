'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

import { languages } from '@/app/constants';

// context
import { useAppContext } from '@/app/context/AppContext';
import { useTranslation } from '@/app/context/TranslateContext';

// components
import MenuSidebar from './components/MenuSidebar';

// icons
import { Menu } from 'react-feather';

export default function Header() {
  const { setMenuIsOpen, menuIsOpen } = useAppContext();
  const { t, language, setLanguage } = useTranslation();

  const changeLanguage = () => {
    const index = languages.findIndex((lang) => lang.name === language.name);
    const nextIndex = index === languages.length - 1 ? 0 : index + 1;

    setLanguage(languages[nextIndex]);
  };

  const menuItems = ['about', 'carrer', 'projects', 'contactMe'] as const;

  const MotionLink = motion(Link);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const href = link.getAttribute('href');
        const target = document.querySelector(href ?? '');

        if (target) {
          const targetScroll =
            target.getBoundingClientRect().top + window.scrollY;

          window.scrollTo({
            top: targetScroll - 100,
            behavior: 'smooth',
          });

          window.history.pushState(null, '', href ?? '');
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <header
        className={styles.container}
        style={menuIsOpen ? { filter: 'blur(0.5rem)' } : {}}
      >
        <motion.h1
          className={styles.logo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href={'/'}>{t.siteName}</Link>
        </motion.h1>

        <div className={styles.buttonsGroup}>
          {menuItems.map((item, index) => (
            <MotionLink
              href={`#${item}`}
              key={item}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: (menuItems.length - index) * 0.1,
              }}
            >
              {t.header[item]}
            </MotionLink>
          ))}

          <motion.button
            className={styles.changeLang}
            onClick={() => changeLanguage()}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={language.icon} alt={t.header.languageButtonAlt} />
          </motion.button>
        </div>

        <motion.button
          className={styles.menuButton}
          onClick={() => setMenuIsOpen(true)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Menu />
        </motion.button>
      </header>

      <MenuSidebar changeLanguage={changeLanguage} menuItems={menuItems} />
    </>
  );
}

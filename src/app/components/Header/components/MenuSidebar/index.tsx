'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.scss';

// context
import { useAppContext } from '@/app/context/AppContext';
import { useTranslation } from '@/app/context/TranslateContext';

// icons
import { X } from 'react-feather';

// types
import { MenuSidebarProps } from './models';

export default function MenuSidebar({
  changeLanguage,
  menuItems,
}: MenuSidebarProps) {
  const { menuIsOpen, setMenuIsOpen } = useAppContext();
  const { t, language } = useTranslation();

  const scrollToItem = (item: string) => {
    const target = document.querySelector(`#${item}`);

    if (target) {
      const targetScroll = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top:
          targetScroll -
          (document.querySelector('#header')?.clientHeight ?? 0) -
          16,
        behavior: 'smooth',
      });

      window.history.pushState(null, '', `#${item}`);

      setMenuIsOpen(false);
    }
  };

  return (
    <aside className={styles.menu} style={menuIsOpen ? { right: 0 } : {}}>
      <div className={styles.row}>
        <motion.button
          tabIndex={menuIsOpen ? 0 : -1}
          onClick={() => changeLanguage()}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={language.icon} alt={t.header.languageButtonAlt} />
        </motion.button>

        <button
          tabIndex={menuIsOpen ? 0 : -1}
          className={styles.onCloseButton}
          onClick={() => setMenuIsOpen(false)}
        >
          <X />
        </button>
      </div>

      <div className={styles.buttonsList}>
        {menuItems.map((item, index) => (
          <motion.button
            tabIndex={menuIsOpen ? 0 : -1}
            key={item}
            onClick={() => scrollToItem(item)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {t.header[item]}
          </motion.button>
        ))}
      </div>
    </aside>
  );
}

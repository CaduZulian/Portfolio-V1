'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

  const MotionLink = motion(Link);

  return (
    <aside className={styles.menu} style={menuIsOpen ? { right: 0 } : {}}>
      <div className={styles.row}>
        <motion.button
          onClick={changeLanguage}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Image src={language.icon} alt={t.header.languageButtonAlt} />
        </motion.button>

        <button
          className={styles.onCloseButton}
          onClick={() => setMenuIsOpen(false)}
        >
          <X />
        </button>
      </div>

      <div className={styles.buttonsList}>
        {menuItems.map((item, index) => (
          <MotionLink
            href={`#${item}`}
            key={item}
            onClick={() => setMenuIsOpen(false)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            {t.header[item]}
          </MotionLink>
        ))}
      </div>
    </aside>
  );
}

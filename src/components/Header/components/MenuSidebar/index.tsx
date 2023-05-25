'use client';

import Image from 'next/image';
import Link from 'next/link';

// context
import { useAppContext } from '@/context/AppContext';

// icons
import { X } from 'react-feather';

// styles
import styles from './styles.module.scss';

// types
import { MenuSidebarProps } from './models';

export default function MenuSidebar({
  changeLanguage,
  menuItems,
}: MenuSidebarProps) {
  const { t, menuIsOpen, setMenuIsOpen, language } = useAppContext();

  return (
    <aside className={styles.menu} style={menuIsOpen ? { right: 0 } : {}}>
      <div className={styles.row}>
        <button onClick={changeLanguage}>
          <Image src={language.icon} alt={t.header.languageButtonAlt} />
        </button>

        <button
          className={styles.onCloseButton}
          onClick={() => setMenuIsOpen(false)}
        >
          <X />
        </button>
      </div>

      <div className={styles.buttonsList}>
        {menuItems.map((item) => (
          <Link
            href={`#${item}`}
            key={item}
            onClick={() => setMenuIsOpen(false)}
          >
            {t.header[item]}
          </Link>
        ))}
      </div>
    </aside>
  );
}

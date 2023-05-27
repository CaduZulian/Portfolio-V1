'use client';

import { useMemo } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

// context
import { useAppContext } from '@/app/context/AppContext';

// icons
import { GitHub, Instagram, Linkedin, Mail } from 'react-feather';

export default function Footer() {
  const { t, menuIsOpen } = useAppContext();

  const socialMediaUrls = useMemo(() => {
    const urls = [];

    if (process.env.NEXT_PUBLIC_LINKEDIN_URL) {
      urls.push({
        url: process.env.NEXT_PUBLIC_LINKEDIN_URL,
        icon: <Linkedin />,
      });
    }

    if (process.env.NEXT_PUBLIC_GITHUB_URL) {
      urls.push({
        url: process.env.NEXT_PUBLIC_GITHUB_URL,
        icon: <GitHub />,
      });
    }

    if (process.env.NEXT_PUBLIC_INSTAGRAM_URL) {
      urls.push({
        url: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
        icon: <Instagram />,
      });
    }

    if (process.env.NEXT_PUBLIC_EMAIL) {
      urls.push({
        url: `mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato pelo portfolio`,
        icon: <Mail />,
      });
    }

    return urls;
  }, []);

  return (
    <footer
      className={styles.container}
      style={menuIsOpen ? { filter: 'blur(0.5rem)' } : {}}
    >
      <div className={styles.socialMediaIcons}>
        {socialMediaUrls.map(({ url, icon }) => (
          <Link href={url} key={url} target='_blank'>
            {icon}
          </Link>
        ))}
      </div>

      <span>
        © {t.siteName} - {new Date().getFullYear()}
      </span>
    </footer>
  );
}

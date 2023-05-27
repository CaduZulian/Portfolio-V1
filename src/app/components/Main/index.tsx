'use client';

import { useMemo } from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

// context
import { useAppContext } from '@/app/context/AppContext';

// icons
import { GitHub, Instagram, Linkedin } from 'react-feather';

export default function Main({ children }: { children: React.ReactNode }) {
  const { menuIsOpen } = useAppContext();

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

    return urls;
  }, []);

  return (
    <section
      className={styles.container}
      style={menuIsOpen ? { filter: 'blur(0.5rem)' } : {}}
    >
      {socialMediaUrls.length > 0 ? (
        <aside className={styles.socialMediaIconGroup}>
          {socialMediaUrls.map(({ url, icon }) => (
            <Link href={url} key={url} target='_blank'>
              {icon}
            </Link>
          ))}
        </aside>
      ) : null}

      <main>{children}</main>

      {process.env.NEXT_PUBLIC_EMAIL ? (
        <aside className={styles.email}>
          <Link
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato pelo portfolio`}
            target='_blank'
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </Link>
        </aside>
      ) : null}
    </section>
  );
}

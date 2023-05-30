'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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

  const MotionLink = motion(Link);

  return (
    <section
      className={styles.container}
      style={menuIsOpen ? { filter: 'blur(0.5rem)' } : {}}
    >
      {socialMediaUrls.length > 0 ? (
        <aside className={styles.socialMediaIconGroup}>
          {socialMediaUrls.map(({ url, icon }, index) => (
            <MotionLink
              href={url}
              key={url}
              target='_blank'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: (socialMediaUrls.length - index) * 0.1,
              }}
            >
              {icon}
            </MotionLink>
          ))}
        </aside>
      ) : null}

      <main>{children}</main>

      {process.env.NEXT_PUBLIC_EMAIL ? (
        <aside className={styles.email}>
          <MotionLink
            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}?subject=Contato pelo portfolio`}
            target='_blank'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
            }}
          >
            {process.env.NEXT_PUBLIC_EMAIL}
          </MotionLink>
        </aside>
      ) : null}
    </section>
  );
}

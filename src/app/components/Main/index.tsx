'use client';

import { useMemo } from 'react';
import Script from 'next/script';
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

  const MotionLink = useMemo(() => motion(Link), []);

  return (
    <section
      className={styles.container}
      style={menuIsOpen ? { filter: 'blur(0.5rem)' } : {}}
    >
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>

      {socialMediaUrls.length > 0 ? (
        <motion.aside
          className={styles.socialMediaIconGroup}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 1 },
          }}
        >
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
        </motion.aside>
      ) : null}

      <main>{children}</main>

      {process.env.NEXT_PUBLIC_EMAIL ? (
        <motion.aside
          className={styles.email}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 1 },
          }}
        >
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
        </motion.aside>
      ) : null}
    </section>
  );
}

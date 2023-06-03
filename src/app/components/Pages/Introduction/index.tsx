'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.scss';

// context
import { useAppContext } from '@/app/context/AppContext';

// components
import { ButtonLink } from '../../ButtonLink';

export default function Introduction() {
  const { t, githubUserData } = useAppContext();

  return (
    <section className={styles.container} id='introduction'>
      <motion.section
        className={styles.userData}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        <div className={styles.dataGroup}>
          <h2>
            {t.introduction.title1} <br /> {t.introduction.title2}
          </h2>

          <span>{t.introduction.subtitle}</span>
        </div>

        <div className={styles.buttonsGroup}>
          <ButtonLink
            color='green'
            href={process.env.NEXT_PUBLIC_CV_URL ?? ''}
            target='_blank'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            {t.introduction.downloadCV}
          </ButtonLink>

          <ButtonLink
            color='white'
            href='#about'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            {t.introduction.learnMore}
          </ButtonLink>
        </div>
      </motion.section>

      <motion.div
        className={styles.userImage}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        <Image
          src={githubUserData.avatar_url}
          width={600}
          height={600}
          alt={t.introduction.userImageAlt}
        />
      </motion.div>
    </section>
  );
}

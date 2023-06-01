'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.scss';

// context
import { useAppContext } from '@/app/context/AppContext';

// components
import Button from '../../Button';

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
          <h1>
            {t.introduction.title1} <br /> {t.introduction.title2}
          </h1>

          <span>{t.introduction.subtitle}</span>
        </div>

        <div className={styles.buttonsGroup}>
          <Button
            color='green'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            {t.introduction.downloadCV}
          </Button>

          <Button
            color='white'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            {t.introduction.learnMore}
          </Button>
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

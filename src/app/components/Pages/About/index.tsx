'use client';

import { motion } from 'framer-motion';

import styles from './styles.module.scss';

// context
import { useTranslation } from '@/app/context/TranslateContext';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <motion.h2
        id='about'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        {t.aboutMe.title}
      </motion.h2>

      {Array(4)
        .fill(0)
        .map((_, index) => (
          <motion.p
            key={`paragraph-${index}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1 },
            }}
          >
            {t.aboutMe[`paragraph${index + 1}` as keyof typeof t.aboutMe]}
          </motion.p>
        ))}
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';

import styles from './styles.module.scss';

// context
import { useTranslation } from '@/app/context/TranslateContext';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section className={styles.container}>
      <motion.h2
        id='contact'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        {t.contact.title}
      </motion.h2>
    </section>
  );
}

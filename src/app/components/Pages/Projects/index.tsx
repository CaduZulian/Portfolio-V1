'use client';

import { motion } from 'framer-motion';

import styles from './styles.module.scss';

// context
import { useTranslation } from '@/app/context/TranslateContext';

// components
import { RepoCards } from './components/RepoCards';
import { ButtonLink } from '../../ButtonLink';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id='projects'>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        {t.projects.title}
      </motion.h2>

      <RepoCards />

      <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <ButtonLink
          color='white'
          href={`https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}?tab=repositories`}
          target='_blank'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 1 },
          }}
        >
          {t.projects.viewMore}
        </ButtonLink>
      </div>
    </section>
  );
}

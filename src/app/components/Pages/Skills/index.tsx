'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './styles.module.scss';

import { skillGroups } from '@/app/constants';

// context
import { useTranslation } from '@/app/context/TranslateContext';

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section id='skills' className={styles.container}>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        {t.skills.title}
      </motion.h2>

      <div className={styles.grid}>
        {skillGroups.map((group) => (
          <div key={group.type} className={styles.group}>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 1 },
              }}
            >
              {t.skills[group.type]}
            </motion.h3>

            <div className={styles.chips}>
              {group.skills.map((s, index) => (
                <motion.span
                  key={s.name}
                  className={styles.chip}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  variants={{
                    hidden: { opacity: 1 },
                  }}
                >
                  {s.iconUrl && (
                    <Image
                      src={s.iconUrl}
                      alt={s.name}
                      width={20}
                      height={20}
                      className={styles.icon}
                    />
                  )}

                  {s.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { Clock, GitBranch, GitHub, Star } from 'react-feather';

import styles from './styles.module.scss';

import { githubColorLanguages } from '../../constants';

// context
import { useAppContext } from '@/app/context/AppContext';

export const RepoCards = () => {
  const { githubReposData } = useAppContext();

  const ReposCards = useMemo(() => {
    if (!githubReposData.length) return;

    const filteredRepos = githubReposData
      .filter(async (repo) => {
        return repo.description !== null;
      })
      .reverse()
      .slice(0, 3);

    return filteredRepos.map((repo, index: number) => {
      return (
        <motion.section
          key={repo.name}
          className={styles.repoCard}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 1, x: 0 },
          }}
        >
          <Image
            className={styles.repoImage}
            src={`https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/main/github/project-image.png`}
            width={300}
            height={300}
            alt={repo.name}
            style={index % 2 === 0 ? { left: 0 } : { right: 0 }}
          />

          <section
            className={styles.repoData}
            style={index % 2 === 0 ? { right: 0 } : { left: 0 }}
          >
            <div className={styles.title}>
              <div className={styles.textGroup}>
                <Clock />

                <span>{format(new Date(repo.updated_at), 'MMM dd, yyyy')}</span>
              </div>

              <Link href={repo.html_url}>
                <GitHub />
              </Link>
            </div>

            <div className={styles.main}>
              <span>
                <strong>{repo.name}</strong>
              </span>

              <p title={repo.description ?? ''}>{repo.description}</p>
            </div>

            <div className={styles.footer}>
              <div className={styles.textGroup}>
                <div
                  style={{
                    width: '1.25rem',
                    height: '1.25rem',
                    borderRadius: '50%',
                    backgroundColor: (githubColorLanguages as any)[
                      repo.language
                    ]?.color,
                  }}
                />

                <span>{repo.language}</span>
              </div>

              <div className={styles.textGroup}>
                <Star />

                <span>{repo.stargazers_count}</span>
              </div>

              <div className={styles.textGroup}>
                <GitBranch />

                <span>{repo.forks_count}</span>
              </div>
            </div>
          </section>
        </motion.section>
      );
    });
  }, [githubReposData]);

  return <>{ReposCards}</>;
};

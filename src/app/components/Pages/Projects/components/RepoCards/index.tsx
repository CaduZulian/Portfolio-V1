'use client';

import { Clock, GitBranch, GitHub, Star } from 'react-feather';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.scss';

import { githubColorLanguages } from '../../constants';

// types
import { IGithubRepository } from '../../models';

export const RepoCards = () => {
  const [githubReposData, setGithubReposData] = useState<IGithubRepository[]>(
    []
  );

  const getGithubRepos = async () => {
    const response = await fetch(
      `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos`,
      {
        next: {
          revalidate: 60 * 60, // 1 hour
        },
      }
    );
    const data = await response.json();

    const githubReposData: IGithubRepository[] = data
      .filter((repo: IGithubRepository) => {
        return (
          repo.description !== null && repo.topics.includes('project-image')
        );
      })
      .reverse()
      .slice(0, 3);

    setGithubReposData(githubReposData);
  };

  useEffect(() => {
    getGithubRepos();
  }, []);

  return (
    <>
      {githubReposData?.map((repo, index: number) => {
        return (
          <motion.section
            key={repo.name}
            className={styles.repoCard}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
              width: `calc(100% - 100px)`,
            }}
            whileInView={{ opacity: 1, x: 0, width: `100%` }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 1, x: 0 },
            }}
          >
            <Image
              className={styles.repoImage}
              src={`https://raw.githubusercontent.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/${repo.name}/main/github/project-image.png`}
              width={1000}
              height={1000}
              alt={repo.name}
              style={index % 2 === 0 ? { left: 0 } : { right: 0 }}
              quality={100}
            />

            <section
              className={styles.repoData}
              style={index % 2 === 0 ? { right: 0 } : { left: 0 }}
            >
              <div className={styles.title}>
                <div className={styles.textGroup}>
                  <Clock />

                  <span>
                    {format(new Date(repo.updated_at), 'MMM dd, yyyy')}
                  </span>
                </div>

                <Link href={repo.html_url} target='_blank'>
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
      })}
    </>
  );
};

import { ComponentProps } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from './styles.module.scss';

type ButtonLinkProps = ComponentProps<typeof motion.a> & {
  children: React.ReactNode;
  color: 'green' | 'white';
  href: string;
};

export const ButtonLink = ({
  children,
  href,
  color,
  ...rest
}: ButtonLinkProps) => {
  const MotionLink: any = motion(Link);

  return (
    <MotionLink
      className={styles.container}
      href={href}
      style={
        color === 'green'
          ? {
              background: 'var(--green-500)',
              border: '1px solid var(--green-500)',
            }
          : color === 'white'
          ? { border: '1px solid var(--white)' }
          : {}
      }
      whileHover={{
        transition: { duration: 0.2 },
        filter: 'brightness(0.7)',
      }}
      {...rest}
    >
      {children}
    </MotionLink>
  );
};

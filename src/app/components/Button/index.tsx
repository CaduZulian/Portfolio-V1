import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

type ButtonProps = ComponentProps<typeof motion.button> & {
  children: React.ReactNode;
  color: 'green' | 'white';
};

export default function Button({ children, color, ...rest }: ButtonProps) {
  return (
    <motion.button
      className={styles.container}
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
      {...rest}
    >
      {children}
    </motion.button>
  );
}

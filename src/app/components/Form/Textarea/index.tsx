import { ComponentProps } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

type TextareaProps = ComponentProps<typeof motion.textarea> & {
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  requiredMessage?: string;
  errors: FieldErrors<any>;
};

export const Textarea = ({
  name,
  register,
  required = false,
  requiredMessage,
  errors,
  ...rest
}: TextareaProps) => {
  return (
    <div className={styles.container}>
      <motion.textarea {...register(name, { required })} {...rest} />

      {errors[name] ? <span>{requiredMessage}</span> : null}
    </div>
  );
};

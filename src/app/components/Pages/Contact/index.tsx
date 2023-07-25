'use client';

import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import styles from './styles.module.scss';

// context
import { useTranslation } from '@/app/context/TranslateContext';

// components
import { Input, Textarea } from '../../Form';
import { Button } from '../../Button';

export default function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<any> = (data) => {
    toast.info('Enviando mensagem...');

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success('Mensagem enviada com sucesso!');
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao enviar a mensagem');
      });
  };

  return (
    <section className={styles.container}>
      <motion.h2
        id='contactMe'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 1 },
        }}
      >
        {t.contact.title}
      </motion.h2>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <section className={styles.row}>
          <Input
            name='userName'
            register={register}
            placeholder={t.contact.form.namePlaceholder}
            requiredMessage={t.contact.form.nameRequiredMessage}
            errors={errors}
            required
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              hidden: { opacity: 1 },
            }}
          />

          <Input
            name='userEmail'
            register={register}
            placeholder={t.contact.form.emailPlaceholder}
            requiredMessage={t.contact.form.emailRequiredMessage}
            errors={errors}
            required
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
              hidden: { opacity: 1 },
            }}
          />
        </section>

        <Input
          name='subject'
          register={register}
          placeholder={t.contact.form.subjectPlaceholder}
          requiredMessage={t.contact.form.subjectRequiredMessage}
          errors={errors}
          required
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          variants={{
            hidden: { opacity: 1 },
          }}
        />

        <Textarea
          name='message'
          register={register}
          placeholder={t.contact.form.messagePlaceholder}
          requiredMessage={t.contact.form.messageRequiredMessage}
          errors={errors}
          required
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={{
            hidden: { opacity: 1 },
          }}
        />

        <Button type='submit' color='green'>
          {t.contact.form.sendButton}
        </Button>
      </form>

      <ToastContainer theme='colored' autoClose={3000} />
    </section>
  );
}

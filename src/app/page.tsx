import styles from './styles.module.scss';

// pages
import About from '@/app/components/Pages/About';
import Carrer from '@/app/components/Pages/Carrer';
import Contact from '@/app/components/Pages/Contact';
import Introduction from '@/app/components/Pages/Introduction';
import Projects from '@/app/components/Pages/Projects';

export default function Home() {
  return (
    <section className={styles.container}>
      <Introduction />

      <About />

      <Carrer />

      {/* @ts-expect-error Server Component */}
      <Projects />

      <Contact />
    </section>
  );
}

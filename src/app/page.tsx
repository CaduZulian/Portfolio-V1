import styles from './styles.module.scss';

// pages
import About from '@/app/components/Pages/About';
import Career from '@/app/components/Pages/Career';
import Contact from '@/app/components/Pages/Contact';
import Introduction from '@/app/components/Pages/Introduction';
import Projects from '@/app/components/Pages/Projects';
import Skills from '@/app/components/Pages/Skills';

export default function Home() {
  return (
    <section className={styles.container}>
      <Introduction />

      <About />

      <Career />

      <Skills />

      <Projects />

      <Contact />
    </section>
  );
}

import { useMemo } from "react";
import Link from "next/link";
import { GitHub, Instagram, Linkedin } from "react-feather";

// styles
import styles from "./styles.module.scss";

export default function Main({ children }: { children: React.ReactNode }) {
  const socialMediaUrls = useMemo(() => {
    const urls = [];

    if (process.env.LINKEDIN_URL) {
      urls.push({
        url: process.env.LINKEDIN_URL,
        icon: <Linkedin />,
      });
    }

    if (process.env.GITHUB_URL) {
      urls.push({
        url: process.env.GITHUB_URL,
        icon: <GitHub />,
      });
    }

    if (process.env.INSTAGRAM_URL) {
      urls.push({
        url: process.env.INSTAGRAM_URL,
        icon: <Instagram />,
      });
    }

    return urls;
  }, []);

  return (
    <section className={styles.container}>
      {socialMediaUrls.length > 0 ? (
        <aside className={styles.socialMediaIconGroup}>
          {socialMediaUrls.map(({ url, icon }) => (
            <Link href={url} key={url} target="_blank">
              {icon}
            </Link>
          ))}
        </aside>
      ) : null}

      <main>{children}</main>

      {process.env.EMAIL ? (
        <aside className={styles.email}>
          <Link
            href={`mailto:${process.env.EMAIL}?subject=Contato pelo portfolio`}
            target="_blank"
          >
            {process.env.EMAIL}
          </Link>
        </aside>
      ) : null}
    </section>
  );
}

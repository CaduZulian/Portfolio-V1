import Link from "next/link";
import { useMemo } from "react";

// icons
import { GitHub, Instagram, Linkedin, Mail } from "react-feather";

// styles
import styles from "./styles.module.scss";

export default function Footer() {
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

    if (process.env.EMAIL) {
      urls.push({
        url: `mailto:${process.env.EMAIL}?subject=Contato pelo portfolio`,
        icon: <Mail />,
      });
    }

    return urls;
  }, []);

  return (
    <footer className={styles.container}>
      <div className={styles.socialMediaIcons}>
        {socialMediaUrls.map(({ url, icon }) => (
          <Link href={url} key={url} target="_blank">
            {icon}
          </Link>
        ))}
      </div>

      <span>© CaduZulian.dev - {new Date().getFullYear()}</span>
    </footer>
  );
}

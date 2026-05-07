import Link from "next/link";
import styles from "./Hero.module.css";

interface HeroProps {
  name: string;
  email: string;
}

export default function Hero({ name, email }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.body}>
        <h1 className={styles.title}>{name}</h1>
        <p className={styles.subtitle}>
          Software Engineer in Test &amp; AI Developer. Building Claude-powered agents and automation tools.
        </p>
        <div className={styles.buttons}>
          <Link href="/resume" className={styles.btnOutline}>View Resume</Link>
          <a href={`mailto:${email}`} className={styles.btnOutline}>Contact Me</a>
        </div>
      </div>
    </section>
  );
}

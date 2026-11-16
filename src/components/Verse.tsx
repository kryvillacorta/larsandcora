import styles from "./Verse.module.css";

export default function Verse() {
  return (
    // Background image: public/images/verse-bg.jpg
    <section id="verse" className={styles.verse}>
      <figure className={styles.content}>
        <blockquote className={styles.quote}>
          We love because he first loved us.
        </blockquote>
        <figcaption className={styles.reference}>1 John 4:19</figcaption>
      </figure>
    </section>
  );
}

import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background image: public/images/hero-main-bg.jpg */}
      <div className={styles.photo} aria-hidden="true" />

      {/* Lace background image: public/images/hero-lace-bg.png */}
      <div className={styles.frame}>
        {/* Stylized names: public/images/larscora-stylized-names.png */}
        <h1 className={styles.names}>
          <Image
            src="/images/larscora-stylized-names.png"
            alt="Larwyn & Cora"
            width={538}
            height={400}
            priority
            className={styles.namesImage}
          />
        </h1>
        <p className={styles.tagline}>Are Getting Married!</p>
      </div>

      <p className={styles.invite}>
        Together with our families, we invite you to join us as we celebrate our
        wedding day.
      </p>
    </section>
  );
}

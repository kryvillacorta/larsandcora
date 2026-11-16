import Image from "next/image";
import styles from "./Closing.module.css";

export default function Closing() {
  return (
    // Background photo: public/images/closing-image.jpg
    <footer className={styles.closing}>
      <p className={styles.with}>With Love,</p>
      <h2 className={styles.names}>
        <Image
          src="/images/larscora-stylized-names.png"
          alt="Larwyn & Cora"
          width={538}
          height={400}
          className={styles.namesImage}
        />
      </h2>
      <p className={styles.date}>01.31.2027</p>
    </footer>
  );
}

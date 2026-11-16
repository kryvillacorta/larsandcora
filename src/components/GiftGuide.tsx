import styles from "./GiftGuide.module.css";

export default function GiftGuide() {
  return (
    <section id="gift-guide" className={`section ${styles.section}`}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2 className={styles.title}>Gift Guide</h2>
          <p>
            Your presence is the greatest gift we could ask for. Having you
            celebrate this special day with us is more than enough.
          </p>
          <p>
            However, should you wish to give a gift, a monetary contribution
            would be warmly appreciated.
          </p>
        </div>

        <div className={styles.qrWrap}>
          {/* Lace doily background: public/images/lace-border-square.png */}
          <div className={styles.qr}>
            {/* TODO: replace with the QR code (e.g. GCash) */}
            <div className={`placeholder ${styles.qrCode}`}>QR code</div>
          </div>
          <p className={styles.thanks}>Thank you for your love and generosity!</p>
        </div>
      </div>
    </section>
  );
}

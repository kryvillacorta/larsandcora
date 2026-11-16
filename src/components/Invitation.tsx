import styles from "./Invitation.module.css";

const MAPS_URL = "https://maps.app.goo.gl/mkX6tFHJsaodwrju8";

export default function Invitation() {
  return (
    <section id="details" className={`section-navy textured ${styles.section}`}>
      <div className={styles.stage}>
        {/* Background image: public/images/invitation-img.png (envelope + blank card) */}
        <div className={styles.envelope} aria-hidden="true" />

        <div className={styles.letterText}>
          <p className={styles.kicker}>you are cordially invited to</p>
          <h2 className={styles.heading}>Our Special Day</h2>
          <p className={styles.when}>
            January 31, 2027, 3:00 PM
            <br />
            Frangeli House
          </p>
        </div>

        {/* Background image: public/images/reception-card.png (stamp card) */}
        <div className={styles.stamp} aria-hidden="true" />

        <div className={styles.stampContent}>
          <p className={styles.mapIntro}>
            We&apos;ve saved you a little map to help you find your way to the
            celebration.
          </p>

          {/* TODO: replace with the illustrated map image */}
          <div className={`placeholder ${styles.map}`}>Map illustration</div>

          <div className={styles.reception}>
            <h3 className={styles.receptionTitle}>The Reception</h3>
            <p className={styles.address}>
              Frangeli House{" "}
              <br />
              #1 St. George Drive, Saint George Hill, Bakakeng Norte, Baguio City
              2600
            </p>
          </div>

          <a
            href={MAPS_URL}
            className={`button ${styles.maps}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>

        {/* Decorations: public/images/wine-glass.png and candle.png */}
        <div className={styles.glasses} aria-hidden="true" />
        <div className={styles.candle} aria-hidden="true" />
      </div>
    </section>
  );
}

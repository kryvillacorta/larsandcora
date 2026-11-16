import styles from "./Entourage.module.css";

// Fill in names later: each group is a label plus the number of blank lines to show.
// Replace the `lines` count with a `names: string[]` array once the lists are final.
const SPONSOR_LINES = 6;

function Lines({ count }: { count: number }) {
  return (
    <>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={styles.line} />
      ))}
    </>
  );
}

export default function Entourage() {
  return (
    <section id="entourage" className="section">
      <h2 className={`section-title ${styles.title}`}>Entourage</h2>
      <p className="lead">
        Our special day wouldn&apos;t be complete without the love and support of
        the people closest to our hearts. We are grateful to have these wonderful
        people standing beside us as we begin this new chapter.
      </p>

      <div className={styles.grid}>
        <div className={`${styles.group} ${styles.left}`}>
          <h3 className={styles.label}>Parents of the Groom</h3>
          <Lines count={2} />
        </div>
        <div className={styles.group}>
          <h3 className={styles.label}>Parents of the Bride</h3>
          <Lines count={2} />
        </div>

        <div className={styles.full}>
          <h3 className={`${styles.label} ${styles.fullLabel}`}>Primary Sponsors</h3>
          <div className={styles.group}>
            <Lines count={SPONSOR_LINES} />
          </div>
          <div className={styles.group}>
            <Lines count={SPONSOR_LINES} />
          </div>
        </div>

        <div className={`${styles.group} ${styles.left}`}>
          <h3 className={styles.label}>Best Man</h3>
          <Lines count={1} />
        </div>
        <div className={styles.group}>
          <h3 className={styles.label}>Maid of Honor</h3>
          <Lines count={1} />
        </div>

        <div className={`${styles.group} ${styles.left}`}>
          <h3 className={styles.label}>Groomsmen</h3>
          <Lines count={5} />
        </div>
        <div className={styles.group}>
          <h3 className={styles.label}>Bridesmaids</h3>
          <Lines count={5} />
        </div>
      </div>
    </section>
  );
}

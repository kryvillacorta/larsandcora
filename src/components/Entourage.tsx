import styles from "./Entourage.module.css";

const GROOM_PARENTS = ["Michael Angelo B. Diaz", "Polyana K. Diaz"];
const BRIDE_PARENTS = ["Medarlo E. Vega", "Virginia F. Vega"];
const BEST_MAN = "Patrick Charles E. Alarcio";
const MAID_OF_HONOR = "Shermanne Kaiylah V. Landingin";

const GROOMSMEN = [
  "Ayvan James K. Vergara",
  "Jerry Jerald G. Villarin Jr.",
  "Lee Carlo A. Elaydo",
  "Ervin Josh A. Ong",
  "Lance Christian C. Teope",
  "John Joseph L. Pariñal",
];

const BRIDESMAIDS = [
  "Marianne Keirrah Jhane V. Baes",
  "Marielle Kassandra Louise V. Baes",
  "Ma. Zara Micah V. Landingin",
  "Laramy Adrienne K. Diaz",
  "Laraine Aiyana K. Diaz",
  "Laraelyn Amira K. Diaz",
];

// Each couple is one row: [left name, right name]
const GODPARENTS: [string, string][] = [
  ["Rolly T. Alarcio", "Jennifer E. Alarcio"],
  ["Joshua A. Laureta", "Jemma Rhea SP. Laureta"],
  ["Fortunato N. Almasco Jr.", "Clarina Lorelei S. Almasco"],
];

function Names({ names }: { names: string[] }) {
  return (
    <>
      {names.map((n) => (
        <div key={n} className={styles.line}>
          {n}
        </div>
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
          <Names names={GROOM_PARENTS} />
        </div>
        <div className={styles.group}>
          <h3 className={styles.label}>Parents of the Bride</h3>
          <Names names={BRIDE_PARENTS} />
        </div>

        <div className={styles.full}>
          <h3 className={`${styles.label} ${styles.fullLabel}`}>Godparents</h3>
          {GODPARENTS.map(([a, b]) => (
            <div key={a} className={styles.couple}>
              <div className={`${styles.line} ${styles.leftLine}`}>{a}</div>
              <div className={styles.line}>{b}</div>
            </div>
          ))}
        </div>

        <div className={`${styles.group} ${styles.left}`}>
          <h3 className={styles.label}>Best Man</h3>
          <Names names={[BEST_MAN]} />
        </div>
        <div className={styles.group}>
          <h3 className={styles.label}>Maid of Honor</h3>
          <Names names={[MAID_OF_HONOR]} />
        </div>

        <div className={`${styles.group} ${styles.left}`}>
          <h3 className={styles.label}>Groomsmen</h3>
          <Names names={GROOMSMEN} />
        </div>
        <div className={styles.group}>
          <h3 className={styles.label}>Bridesmaids</h3>
          <Names names={BRIDESMAIDS} />
        </div>
      </div>
    </section>
  );
}

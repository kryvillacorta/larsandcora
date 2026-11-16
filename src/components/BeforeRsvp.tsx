import styles from "./BeforeRsvp.module.css";

const RSVP_URL = "https://larsandcora.rsvp/";
const reminders = [
  {
    title: "An Adults-Only Celebration",
    body: "As much as we love the little ones, we kindly request an adults-only celebration. Thank you for understanding.",
  },
  {
    title: "A Personal Invitation",
    body: "This invitation is exclusively intended for the guests who received the invitation link. Kindly refrain from forwarding or sharing the invitation.",
  },
  {
    title: "Regarding Plus-Ones",
    body: "We are only able to accommodate the specific number of guests. Additional guests may only attend if explicitly included in your invitation.",
  },
];

export default function BeforeRsvp() {
  return (
    <section id="rsvp" className="section section-navy textured">
      <h2 className={`section-title ${styles.title}`}>Before you RSVP</h2>
      <p className={styles.intro}>
        A few gentle reminders to help us make this celebration as special and
        comfortable as possible for everyone.
      </p>

      <div className={styles.cards}>
        {reminders.map((r) => (
          <div key={r.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{r.title}</h3>
            <p className={styles.cardBody}>{r.body}</p>
          </div>
        ))}
      </div>

      <p className={styles.thanks}>
        Thank you for respecting our wishes and helping us keep this celebration
        intimate and meaningful.
      </p>

      {/* Film-strip photos: public/images/photo-1.jpg, photo-2.jpg, photo-3.jpg */}
      <div className={styles.strip}>
        <div className={`${styles.frame} ${styles.photo1}`} role="img" aria-label="Larwyn and Cora, photo 1" />
        <div className={`${styles.frame} ${styles.photo2}`} role="img" aria-label="Larwyn and Cora, photo 2" />
        <div className={`${styles.frame} ${styles.photo3}`} role="img" aria-label="Larwyn and Cora, photo 3" />
      </div>

      <div className={styles.cta}>
        <h2 className={styles.ctaTitle}>Will you celebrate with us?</h2>
        <p className={styles.ctaText}>
          We would be delighted to have you join us on our special day!
          <br />
          Kindly let us know if you&apos;ll be celebrating with us by{" "}
          <u>December 24, 2026</u>
        </p>
        <a
          href={RSVP_URL}
          className="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          RSVP Form
        </a>
      </div>
    </section>
  );
}

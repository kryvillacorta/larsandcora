"use client";

import { useState } from "react";
import styles from "./DressCode.module.css";

type Swatch = { color: string; outlined?: boolean };

// Palettes and copy from the design. Each group's swatches are listed in rows;
// `outlined` adds a thin border to very light colors so they stay visible on the cream card.
const groups: {
  id: string;
  label: string;
  title: string;
  swatchRows: Swatch[][];
  note: string;
}[] = [
  {
    id: "parents",
    label: "Parents & Godparents",
    title: "Parents & Godparents",
    swatchRows: [[{ color: "#1f3350" }]],
    note: "Please wear the designated shade for our parents and godparents.",
  },
  {
    id: "bridesmaids",
    label: "Bridesmaids",
    title: "Entourage - Women",
    swatchRows: [
      [{ color: "#b9d8ea" }, { color: "#c8dfee" }],
      [
        { color: "#fdeca0" },
        { color: "#fdf5d3", outlined: true },
        { color: "#fffdf0", outlined: true },
      ],
    ],
    note: "For our lovely ladies in the entourage, please follow this soft, light-toned palette.",
  },
  {
    id: "groomsmen",
    label: "Groomsmen",
    title: "Entourage - Men",
    swatchRows: [[{ color: "#2e1f17" }, { color: "#886d58" }, { color: "#3d4a37" }]],
    note: "For the gentlemen, please follow the designated earthy tones.",
  },
  {
    id: "guests",
    label: "Guests",
    title: "Guests - Friends & Families",
    swatchRows: [[{ color: "#7b956d" }, { color: "#a6b59d" }, { color: "#e5b2cf" }]],
    note: "We invite our guests to wear either of these lovely shades of green and blush pink.",
  },
];

export default function DressCode() {
  const [active, setActive] = useState(groups[0].id);
  const group = groups.find((g) => g.id === active) ?? groups[0];

  return (
    <section id="dress-code" className={`section section-navy ${styles.section}`}>
      {/* Top lace border: public/images/lace-border-upper.png */}
      <div className={`${styles.lace} ${styles.laceTop}`} aria-hidden="true" />

      <h2 className={`section-title ${styles.title}`}>Dress Code</h2>
      <p className="lead">
        As we celebrate amidst the beauty of nature, we&apos;d love for you to
        dress in a way that complements our garden-inspired celebration.
      </p>

      {/* Ribbon illustration: public/images/ribbon.png */}
      <div className={styles.bow} role="img" aria-label="" />

      <p className="lead">
        We&apos;ve prepared a color guide for each group of guests.
        <br />
        Select your assigned group below to discover your palette.
      </p>

      <div className={styles.tabs} role="tablist" aria-label="Guest group">
        {groups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === active}
            className={`${styles.tab} ${g.id === active ? styles.tabActive : ""}`}
            onClick={() => setActive(g.id)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className={styles.card} role="tabpanel">
        <div className={styles.left}>
          <div className={styles.head}>
            <h3 className={styles.cardTitle}>{group.title}</h3>
            <div className={styles.swatches}>
              {group.swatchRows.map((row, i) => (
                <div key={i} className={styles.swatchRow}>
                  {row.map((sw) => (
                    <span
                      key={sw.color}
                      className={`${styles.swatch} ${sw.outlined ? styles.swatchOutlined : ""}`}
                      style={{ background: sw.color }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <p className={styles.note}>{group.note}</p>
        </div>
        {/* TODO: replace with outfit inspiration image */}
        <div className={`placeholder ${styles.inspo}`}>Outfit inspiration</div>
      </div>

      {/* Bottom lace border: public/images/lace-border-lower.png */}
      <div className={`${styles.lace} ${styles.laceBottom}`} aria-hidden="true" />
    </section>
  );
}

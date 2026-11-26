"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./DressCode.module.css";

type Swatch = { color: string; outlined?: boolean };

// Palettes and copy from the design. Each group's swatches are listed in rows;
// `outlined` adds a thin border to very light colors so they stay visible on the cream card.
const ATTIRE: Record<string, string> = {
  Women: "Floor length to tea length (lower calf).",
  Men: "Coat is optional.",
};

const groups: {
  id: string;
  label: string;
  title: string;
  swatchRows: Swatch[][];
  note: string;
  images: { label: string; src: string }[];
}[] = [
  {
    id: "parents",
    label: "Parents & Godparents",
    title: "Parents & Godparents",
    swatchRows: [[{ color: "#1f3350" }]],
    note: "Please wear the designated shade for our parents and godparents.",
    images: [{ label: "Men", src: "/images/M Parents Godparents.png" }, { label: "Women", src: "/images/W Parents & Godparents.png" }],
  },
  {
    id: "bridesmaids",
    label: "Bridesmaids",
    title: "Entourage - Women",
    swatchRows: [[{ color: "#b9d8ea" }, { color: "#fdeca0" }]],
    note: "For our lovely ladies in the entourage, please follow this soft, light-toned palette.",
    images: [{ label: "Women", src: "/images/W Bridesmaid.png" }],
  },
  {
    id: "groomsmen",
    label: "Groomsmen",
    title: "Entourage - Men",
    swatchRows: [[{ color: "#2e1f17" }, { color: "#886d58" }, { color: "#3d4a37" }]],
    note: "For the gentlemen, please follow the designated earthy tones.",
    images: [{ label: "Men", src: "/images/M Groomsmen.png" }],
  },
  {
    id: "guests",
    label: "Guests",
    title: "Guests - Friends & Families",
    swatchRows: [[{ color: "#7b956d" }, { color: "#a6b59d" }, { color: "#e2c5c3" }]],
    note: "We invite our guests to wear either of these lovely shades of green and blush pink.",
    images: [{ label: "Men", src: "/images/M Guest.png" }, { label: "Women", src: "/images/W Guest.png" }],
  },
];

export default function DressCode() {
  const [active, setActive] = useState(groups[0].id);
  const group = groups.find((g) => g.id === active) ?? groups[0];
  const [view, setView] = useState("Men");
  const image = group.images.find((i) => i.label === view) ?? group.images[0];

  return (
    <section id="dress-code" className={`section section-navy ${styles.section}`}>
      {/* Top lace border: public/images/lace-border-upper.png */}
      <div className={`${styles.lace} ${styles.laceTop}`} aria-hidden="true" />

      <h2 className={`section-title ${styles.title}`}>Dress Code</h2>
      <p className="lead">
        As we celebrate amidst the beauty of nature, we&apos;d love for you to
        dress in a way that complements our garden-inspired celebration.
      </p>

      <p className={`lead ${styles.formal}`}>
        <strong>Dress code: Formal.</strong>
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
          <div className={styles.note}>
            <p>{group.note}</p>
            <p className={styles.attire}>
              <strong>{image.label}:</strong> {ATTIRE[image.label]}
            </p>
          </div>
        </div>
        <div className={styles.inspoWrap}>
          {group.images.length > 1 && (
            <div className={styles.viewToggle} role="group" aria-label="Outfit for">
              {group.images.map((i) => (
                <button
                  key={i.label}
                  type="button"
                  aria-pressed={i.label === image.label}
                  className={`${styles.viewBtn} ${i.label === image.label ? styles.viewBtnActive : ""}`}
                  onClick={() => setView(i.label)}
                >
                  {i.label}
                </button>
              ))}
            </div>
          )}
          <div className={styles.inspo}>
            <Image
              key={image.src}
              src={image.src}
              alt={`${group.title} outfit inspiration, ${image.label.toLowerCase()}`}
              fill
              sizes="(max-width: 48rem) 90vw, 28rem"
              className={styles.inspoImg}
            />
          </div>
        </div>
      </div>

      {/* Bottom lace border: public/images/lace-border-lower.png */}
      <div className={`${styles.lace} ${styles.laceBottom}`} aria-hidden="true" />
    </section>
  );
}

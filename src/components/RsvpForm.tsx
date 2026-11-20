"use client";

import { useState } from "react";
import styles from "./RsvpForm.module.css";

const OPTIONS = [
  { value: "yes", label: "Absolutely, wouldn't miss it!" },
  { value: "no", label: "Can't make it this time." },
];

export default function RsvpForm() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!attending) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, attending, website }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>RSVP</h2>
      <p className={styles.sub}>Please respond by December 24, 2026</p>

      {status === "done" ? (
        <p className={styles.thanks} role="status">
          {attending === "yes"
            ? `Thank you${name ? `, ${name}` : ""}! We can't wait to celebrate with you.`
            : `Thank you${name ? `, ${name}` : ""} for letting us know. You will be missed!`}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.hp} aria-hidden="true">
            <label htmlFor="rsvp-website">Leave this field empty</label>
            <input
              id="rsvp-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <label htmlFor="rsvp-name" className={styles.label}>
            Your name
          </label>
          <input
            id="rsvp-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />

          <fieldset className={styles.fieldset}>
            <legend className={styles.label}>
              Will you be joining us?<sup>*</sup>
            </legend>
            {OPTIONS.map((o) => (
              <label
                key={o.value}
                className={`${styles.option} ${attending === o.value ? styles.selected : ""}`}
              >
                <input
                  type="radio"
                  name="attending"
                  value={o.value}
                  required
                  checked={attending === o.value}
                  onChange={() => setAttending(o.value)}
                  className={styles.radio}
                />
                {o.label}
              </label>
            ))}
          </fieldset>

          {status === "error" && (
            <p className={styles.error} role="alert">
              Sorry, something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className={styles.submit}
          >
            {status === "sending" ? "Sending…" : <>RSVP <em>now</em></>}
          </button>
        </form>
      )}

      <p className={styles.ps}>
        PS: This link is just for you! Please don&apos;t send it to anyone else.
        Thank you!
      </p>
    </div>
  );
}

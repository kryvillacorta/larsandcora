"use client";

import { useEffect } from "react";

/**
 * Fades sections in as they scroll into view, on every screen size.
 *
 * Targets the direct children of every <section> and <footer> inside <main>. Whatever is below
 * the fold starts hidden and fades/slides in once as it scrolls into view. Elements already on
 * screen are left alone (no flash). Hiding is applied by JS only, so with scripting off the page
 * still shows normally. Does nothing for "reduce motion" visitors.
 *
 * It re-checks when the window is resized or the phone is rotated, because what counts as
 * "below the fold" changes with the screen size (e.g. a desktop window dragged to phone width).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const all = Array.from(
      document.querySelectorAll<HTMLElement>("main > section > *, main > footer > *")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    // Hide (instantly) everything that is currently below the fold and watch it.
    const arm = () => {
      all.forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight * 0.92) {
          el.classList.add("reveal");
          el.classList.remove("reveal-in");
          observer.observe(el);
        }
      });
    };

    arm();

    let timer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(arm, 200);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      observer.disconnect();
    };
  }, []);

  return null;
}

"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function RSVP() {
  const [state, setState] = useState<FormState>("idle");
  const [attending, setAttending] = useState<"yes" | "no" | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // Simulate submission — replace with actual API call or Formspree/etc.
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  }

  return (
    <section
      id="rsvp"
      className="py-24 px-6"
      style={{ background: "linear-gradient(to bottom, #fdf8f3, #f5ede8)" }}
    >
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a] mb-3">
            Kindly Reply By May 1, 2025
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-5xl text-[#2c2c2c]">
            RSVP
          </h2>
        </div>

        {state === "success" ? (
          <div className="text-center py-12">
            <p className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#c4847a] mb-3">
              Thank you!
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-lg text-[#7a7a6e]">
              We have received your response. We can&apos;t wait to celebrate with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#7a7a6e] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full border-b border-[#e8c4b4] bg-transparent pb-2 font-[family-name:var(--font-cormorant)] text-lg text-[#2c2c2c] placeholder:text-[#b0a89e] outline-none focus:border-[#c4847a] transition-colors"
              />
            </div>

            <div>
              <label className="block font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#7a7a6e] mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="w-full border-b border-[#e8c4b4] bg-transparent pb-2 font-[family-name:var(--font-cormorant)] text-lg text-[#2c2c2c] placeholder:text-[#b0a89e] outline-none focus:border-[#c4847a] transition-colors"
              />
            </div>

            <div>
              <label className="block font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#7a7a6e] mb-3">
                Will you attend? *
              </label>
              <div className="flex gap-4">
                {(["yes", "no"] as const).map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAttending(val)}
                    className={`flex-1 py-3 border font-[family-name:var(--font-cormorant)] tracking-[0.15em] uppercase text-sm transition-all ${
                      attending === val
                        ? "border-[#c4847a] bg-[#c4847a] text-white"
                        : "border-[#e8c4b4] text-[#7a7a6e] hover:border-[#c4847a]"
                    }`}
                  >
                    {val === "yes" ? "Joyfully Accepts" : "Regretfully Declines"}
                  </button>
                ))}
              </div>
            </div>

            {attending === "yes" && (
              <div>
                <label className="block font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#7a7a6e] mb-2">
                  Number of Guests
                </label>
                <select className="w-full border-b border-[#e8c4b4] bg-transparent pb-2 font-[family-name:var(--font-cormorant)] text-lg text-[#2c2c2c] outline-none focus:border-[#c4847a] transition-colors">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            )}

            {attending === "yes" && (
              <div>
                <label className="block font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#7a7a6e] mb-2">
                  Meal Preference
                </label>
                <select className="w-full border-b border-[#e8c4b4] bg-transparent pb-2 font-[family-name:var(--font-cormorant)] text-lg text-[#2c2c2c] outline-none focus:border-[#c4847a] transition-colors">
                  <option value="">Select one</option>
                  <option value="chicken">Herb Roasted Chicken</option>
                  <option value="salmon">Wild Salmon</option>
                  <option value="vegetarian">Vegetarian</option>
                </select>
              </div>
            )}

            <div>
              <label className="block font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#7a7a6e] mb-2">
                Dietary Restrictions or Notes
              </label>
              <textarea
                rows={3}
                placeholder="Allergies, accessibility needs, song requests..."
                className="w-full border-b border-[#e8c4b4] bg-transparent pb-2 font-[family-name:var(--font-cormorant)] text-lg text-[#2c2c2c] placeholder:text-[#b0a89e] outline-none focus:border-[#c4847a] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!attending || state === "submitting"}
              className="mt-2 py-4 border border-[#c4847a] text-[#c4847a] font-[family-name:var(--font-cormorant)] tracking-[0.2em] uppercase text-sm hover:bg-[#c4847a] hover:text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {state === "submitting" ? "Sending..." : "Send RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

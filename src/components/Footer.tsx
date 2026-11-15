export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-[#fdf8f3] py-16 px-6 text-center">
      <h2 className="font-[family-name:var(--font-playfair)] italic text-4xl mb-2">
        Lars <span className="text-[#c4847a]">&amp;</span> Cora
      </h2>
      <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a] mb-8">
        June 14, 2025 · Portland, Oregon
      </p>

      <div className="section-divider w-32 mx-auto mb-8 !text-[#8a9e8a]" />

      <p className="font-[family-name:var(--font-cormorant)] text-base text-[#9a9a90] italic">
        "I carry your heart with me; I carry it in my heart."
      </p>
      <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#7a7a6e] mt-2">
        — e.e. cummings
      </p>

      <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-widest uppercase text-[#5a5a52] mt-12">
        Questions? Contact us at{" "}
        <a
          href="mailto:hello@larsandcora.com"
          className="text-[#c4847a] hover:text-[#e8c4b4] transition-colors"
        >
          hello@larsandcora.com
        </a>
      </p>
    </footer>
  );
}

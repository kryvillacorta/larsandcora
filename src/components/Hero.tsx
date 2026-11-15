export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Soft gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 40%, #f5e6df 0%, #fdf8f3 55%, #eef2ee 100%)",
        }}
      />

      {/* Decorative botanical outline — top left */}
      <div className="absolute top-0 left-0 w-72 h-72 opacity-10 pointer-events-none select-none text-[#8a9e8a]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 190 Q40 120 100 100 Q140 85 180 10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100 100 Q70 60 30 50"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100 100 Q130 130 120 170"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="30" cy="50" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="180" cy="10" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="120" cy="170" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Decorative botanical outline — bottom right */}
      <div className="absolute bottom-0 right-0 w-72 h-72 opacity-10 pointer-events-none select-none text-[#c4847a] rotate-180">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 190 Q40 120 100 100 Q140 85 180 10"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100 100 Q70 60 30 50"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M100 100 Q130 130 120 170"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle cx="30" cy="50" r="6" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="180" cy="10" r="5" stroke="currentColor" strokeWidth="1" fill="none" />
          <circle cx="120" cy="170" r="4" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
        <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a]">
          Together with their families
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] font-normal text-6xl md:text-8xl italic text-[#2c2c2c] leading-none tracking-tight">
          Lars <span className="text-[#c4847a]">&amp;</span> Cora
        </h1>

        <div className="section-divider w-32 my-1" />

        <p className="font-[family-name:var(--font-cormorant)] text-xl md:text-2xl font-light tracking-widest text-[#7a7a6e] uppercase">
          request the pleasure of your company
        </p>

        <div className="mt-4 font-[family-name:var(--font-playfair)] text-center">
          <p className="text-2xl md:text-3xl text-[#2c2c2c] font-light">
            Saturday, the Fourteenth of June
          </p>
          <p className="text-xl md:text-2xl text-[#7a7a6e] font-light mt-1">
            Two Thousand and Twenty-Five
          </p>
        </div>

        <a
          href="#rsvp"
          className="mt-6 inline-block border border-[#c4847a] text-[#c4847a] font-[family-name:var(--font-cormorant)] tracking-[0.2em] uppercase text-sm px-10 py-3 hover:bg-[#c4847a] hover:text-white transition-all duration-300"
        >
          RSVP
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#2c2c2c]">
          Scroll
        </span>
        <div className="w-px h-10 bg-[#2c2c2c] animate-pulse" />
      </div>
    </section>
  );
}

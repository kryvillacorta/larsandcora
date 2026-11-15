const hotels = [
  {
    name: "The Heathman Hotel",
    tier: "Luxury",
    distance: "0.8 mi from venue",
    note: "Use code LARSCORA for 15% off",
    url: "#",
  },
  {
    name: "Hotel Lucia",
    tier: "Boutique",
    distance: "1.2 mi from venue",
    note: "Block of rooms reserved — book by May 1",
    url: "#",
  },
  {
    name: "AC Hotel Portland",
    tier: "Modern",
    distance: "2 mi from venue",
    note: "Complimentary shuttle on wedding day",
    url: "#",
  },
];

export default function Travel() {
  return (
    <section
      id="travel"
      className="py-24 px-6"
      style={{ background: "linear-gradient(to bottom, #fdf8f3, #f5ede8)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a] mb-3">
            Getting Here
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-5xl text-[#2c2c2c]">
            Travel &amp; Lodging
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#2c2c2c] mb-4">
              Venue
            </h3>
            <p className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[#2c2c2c]">
              The Garden Estate
            </p>
            <p className="font-[family-name:var(--font-cormorant)] text-base text-[#7a7a6e] mt-1">
              1234 Rose Garden Way
              <br />
              Portland, OR 97201
            </p>
            <a
              href="#"
              className="inline-block mt-4 font-[family-name:var(--font-cormorant)] text-sm tracking-[0.15em] uppercase text-[#c4847a] border-b border-[#c4847a]/40 hover:border-[#c4847a] transition-colors"
            >
              View on Map
            </a>
          </div>

          <div>
            <h3 className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#2c2c2c] mb-4">
              Getting There
            </h3>
            <div className="space-y-3">
              <p className="font-[family-name:var(--font-cormorant)] text-base text-[#5a5a52]">
                <span className="font-semibold text-[#2c2c2c]">By Air:</span> Portland International Airport (PDX) is 30 min away.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-base text-[#5a5a52]">
                <span className="font-semibold text-[#2c2c2c]">Parking:</span> Free valet and self-parking available on-site.
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-base text-[#5a5a52]">
                <span className="font-semibold text-[#2c2c2c]">Rideshare:</span> Uber and Lyft both serve the venue.
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#2c2c2c] mb-6 text-center">
          Recommended Hotels
        </h3>

        <div className="grid sm:grid-cols-3 gap-6">
          {hotels.map((h) => (
            <div
              key={h.name}
              className="p-6 border border-[#e8c4b4]/40 bg-white/60 hover:border-[#e8c4b4] transition-colors"
            >
              <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.25em] uppercase text-[#8a9e8a] mb-2">
                {h.tier}
              </p>
              <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[#2c2c2c] mb-1">
                {h.name}
              </h4>
              <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#7a7a6e] mb-2">
                {h.distance}
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#5a5a52] italic mb-4">
                {h.note}
              </p>
              <a
                href={h.url}
                className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.15em] uppercase text-[#c4847a] border-b border-[#c4847a]/40 hover:border-[#c4847a] transition-colors"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

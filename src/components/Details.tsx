const cards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: "Date",
    primary: "June 14, 2025",
    secondary: "Saturday",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Time",
    primary: "4:00 PM",
    secondary: "Ceremony begins",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Venue",
    primary: "The Garden Estate",
    secondary: "Portland, Oregon",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: "Dress Code",
    primary: "Garden Formal",
    secondary: "Florals encouraged",
  },
];

export default function Details() {
  return (
    <section id="details" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a] mb-3">
            The Day
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-5xl text-[#2c2c2c]">
            Wedding Details
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center text-center p-8 border border-[#e8c4b4]/40 hover:border-[#e8c4b4] transition-colors group"
            >
              <div className="text-[#c4847a] mb-4 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.25em] uppercase text-[#8a9e8a] mb-2">
                {card.label}
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-lg text-[#2c2c2c]">
                {card.primary}
              </p>
              <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#7a7a6e] mt-1">
                {card.secondary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

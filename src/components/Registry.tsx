const registries = [
  {
    name: "Williams Sonoma",
    desc: "Kitchen & dining essentials",
    icon: "🍽",
    url: "#",
  },
  {
    name: "Crate & Barrel",
    desc: "Home furnishings & decor",
    icon: "🏡",
    url: "#",
  },
  {
    name: "Honeyfund",
    desc: "Contributions to our honeymoon",
    icon: "✈",
    url: "#",
  },
];

export default function Registry() {
  return (
    <section id="registry" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a] mb-3">
          Gifts
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-5xl text-[#2c2c2c] mb-4">
          Registry
        </h2>
        <p className="font-[family-name:var(--font-cormorant)] text-lg font-light text-[#7a7a6e] max-w-xl mx-auto mb-14">
          Your presence at our wedding is the greatest gift of all. If you wish to honor us with a gift, we are registered at the following:
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {registries.map((r) => (
            <a
              key={r.name}
              href={r.url}
              className="group flex flex-col items-center p-10 border border-[#e8c4b4]/40 hover:border-[#c4847a] transition-all hover:shadow-sm"
            >
              <span className="text-4xl mb-4">{r.icon}</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#2c2c2c] mb-1">
                {r.name}
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-sm text-[#7a7a6e] mb-5">
                {r.desc}
              </p>
              <span className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.2em] uppercase text-[#c4847a] border-b border-[#c4847a]/0 group-hover:border-[#c4847a]/60 transition-colors">
                View Registry
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

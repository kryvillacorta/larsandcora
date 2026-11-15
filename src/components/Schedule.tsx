const events = [
  { time: "3:30 PM", title: "Guests Arrive", desc: "Welcome cocktails and garden mingling" },
  { time: "4:00 PM", title: "Ceremony", desc: "Garden ceremony with officiant" },
  { time: "4:45 PM", title: "Cocktail Hour", desc: "Drinks, hors d'oeuvres, and photos" },
  { time: "6:00 PM", title: "Dinner", desc: "Seated dinner reception in the pavilion" },
  { time: "7:30 PM", title: "First Dances & Toasts", desc: "First dance, parent dances, and heartfelt words" },
  { time: "8:00 PM", title: "Dancing", desc: "Dancing the night away under the stars" },
  { time: "11:00 PM", title: "Send-Off", desc: "Farewell and late-night snacks" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a] mb-3">
            June 14, 2025
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-5xl text-[#2c2c2c]">
            Day of Schedule
          </h2>
        </div>

        <div className="relative pl-8 border-l border-[#e8c4b4]/60">
          {events.map((e) => (
            <div key={e.time} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-[41px] w-4 h-4 rounded-full border-2 border-[#c4847a] bg-[#fdf8f3]" />

              <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.25em] uppercase text-[#8a9e8a] mb-1">
                {e.time}
              </p>
              <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#2c2c2c]">
                {e.title}
              </h3>
              <p className="font-[family-name:var(--font-cormorant)] text-base font-light text-[#7a7a6e] mt-0.5">
                {e.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

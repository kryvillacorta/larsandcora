const milestones = [
  {
    year: "2019",
    title: "How We Met",
    body: "We crossed paths at a mutual friend's dinner party in Portland. Lars brought wine; Cora brought the best dessert anyone had ever tasted. It was settled.",
  },
  {
    year: "2021",
    title: "First Adventure",
    body: "A camping trip to the Olympic Peninsula that was supposed to last a weekend stretched into ten days. We didn't want to come home.",
  },
  {
    year: "2023",
    title: "The Proposal",
    body: "On a rainy Tuesday, in the kitchen, flour on both of our hands, Lars asked Cora to marry him. She said yes before he finished the sentence.",
  },
  {
    year: "2025",
    title: "Forever Begins",
    body: "On June 14th, surrounded by the people we love most, we begin our greatest adventure together.",
  },
];

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-24 px-6"
      style={{
        background:
          "linear-gradient(to bottom, #fdf8f3, #f5ede8)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.3em] uppercase text-[#8a9e8a] mb-3">
            How It Happened
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] italic text-4xl md:text-5xl text-[#2c2c2c]">
            Our Story
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#e8c4b4]/60 -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-16">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text side */}
                <div className="flex-1 text-center md:text-left">
                  <p className="font-[family-name:var(--font-cormorant)] text-xs tracking-[0.3em] uppercase text-[#8a9e8a] mb-2">
                    {m.year}
                  </p>
                  <h3 className="font-[family-name:var(--font-playfair)] italic text-2xl text-[#2c2c2c] mb-3">
                    {m.title}
                  </h3>
                  <p className="font-[family-name:var(--font-cormorant)] text-lg font-light text-[#5a5a52] leading-relaxed">
                    {m.body}
                  </p>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#c4847a] bg-[#fdf8f3] z-10 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-[#c4847a]" />
                </div>

                {/* Spacer side */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

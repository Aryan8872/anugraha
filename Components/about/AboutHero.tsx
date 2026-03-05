// About page hero section
const STATS = [
  { value: "2018", label: "Founded" },
  { value: "10K+", label: "Customers" },
  { value: "100%", label: "Organic Cotton" },
  { value: "48h", label: "Dispatch" },
];

export default function AboutHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end py-16 border-b border-black/5">
      {/* Left */}
      <div className="flex flex-col gap-6">
        <p className="text-[10px] uppercase tracking-[0.25em] text-text-black/40">
          Our Story
        </p>
        <h1 className="font-clash-display text-5xl lg:text-7xl font-medium uppercase leading-[1.05] tracking-tight">
          Crafted <br />
          <span className="text-green-primary">with intent.</span>
          <br /> Worn with pride.
        </h1>
      </div>

      {/* Right */}
      <div className="flex flex-col gap-8">
        <p className="text-sm leading-relaxed text-text-black/60 max-w-md">
          Anugraha was born from a simple belief — that everyday clothing should
          feel intentional. We design premium, sustainably sourced streetwear
          rooted in South Asian identity, made for people who value both craft
          and culture.
        </p>
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-black/5 pt-8">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-clash-display text-2xl font-medium">
                {value}
              </span>
              <span className="text-[9px] uppercase tracking-[0.18em] text-text-black/40">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

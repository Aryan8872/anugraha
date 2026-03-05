// About page values grid
const VALUES = [
  {
    num: "01",
    title: "Sustainable Materials",
    desc: "Every thread is sourced responsibly. We use GOTS-certified organic cotton and low-impact dyes on every piece.",
  },
  {
    num: "02",
    title: "Considered Design",
    desc: "Each drop is designed with intent — no filler, no fast fashion. Only pieces you'll reach for again and again.",
  },
  {
    num: "03",
    title: "Cultural Roots",
    desc: "Our aesthetic draws from South Asian art, architecture and everyday life — translated into wearable minimalism.",
  },
  {
    num: "04",
    title: "Community First",
    desc: "We partner with local artisans and reinvest in the communities that make our clothing possible.",
  },
];

export default function AboutValues() {
  return (
    <section className="flex flex-col gap-10 py-16 border-b border-black/5">
      <p className="text-[10px] uppercase tracking-[0.25em] text-text-black/40">
        What We Stand For
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {VALUES.map(({ num, title, desc }) => (
          <div key={num} className="flex flex-col gap-4">
            <span className="font-clash-display text-4xl font-medium text-text-black/10">
              {num}
            </span>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em]">
              {title}
            </h3>
            <p className="text-[11px] leading-relaxed text-text-black/50">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

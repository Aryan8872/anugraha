// About page team section
const TEAM = [
  { name: "Anugraha Karki", role: "Founder & Creative Director" },
  { name: "Rohan Shrestha", role: "Head of Design" },
  { name: "Priya Tamang", role: "Production & Sourcing" },
];

export default function AboutTeam() {
  return (
    <section className="flex flex-col gap-10 py-16">
      <p className="text-[10px] uppercase tracking-[0.25em] text-text-black/40">
        The People Behind It
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {TEAM.map(({ name, role }) => (
          <div key={name} className="flex flex-col gap-0">
            {/* Placeholder image */}
            <div className="aspect-square w-full bg-[#f5f5f5] mb-4" />
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em]">
              {name}
            </h3>
            <span className="text-[10px] uppercase tracking-[0.1em] text-text-black/40 mt-1">
              {role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

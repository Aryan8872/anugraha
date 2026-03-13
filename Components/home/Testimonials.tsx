import React from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────
interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  product: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rahul K.",
    location: "Kathmandu",
    rating: 5,
    quote:
      "The quality is unreal for the price. My hoodie feels like it'll last forever — worth every rupee.",
    product: "Classic Hoodie",
  },
  {
    id: 2,
    name: "Priya M.",
    location: "Lalitpur",
    rating: 5,
    quote:
      "Ordered the essentials tee and it fits perfectly. The fabric breathes really well even on hot days.",
    product: "Essentials Tee",
  },
  {
    id: 3,
    name: "Aditya S.",
    location: "Pokhara",
    rating: 5,
    quote:
      "Minimal, clean, and incredibly well-made. Anugraha is the brand I've been looking for.",
    product: "Wide Trousers",
  },
  {
    id: 4,
    name: "Sita T.",
    location: "Bhaktapur",
    rating: 5,
    quote:
      "Received my handbag and I'm obsessed. The stitching is immaculate and the leather feels premium.",
    product: "Structured Handbag",
  },
  {
    id: 5,
    name: "Dev R.",
    location: "Biratnagar",
    rating: 5,
    quote:
      "Fast delivery, zero defects, and packaging was beautiful. Already ordered a second piece.",
    product: "Modular Vest",
  },
];

// ─── Star component ────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-3 h-3 ${i < rating ? "text-green-600" : "text-zinc-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Main Component (no animations — pure static) ─────────────────────────────
export default function Testimonials() {
  return (
    <section className="w-full py-24 sm:py-32 px-4 sm:px-12 bg-zinc-50">
      <div className="max-w-screen-2xl mx-auto">
        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div className="mb-16 border-b border-zinc-100 pb-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-green-primary">
            What They Say
          </h2>
        </div>

        {/* ── Cards Grid ─────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              className={`bg-white border border-zinc-100 p-7 md:p-9 flex flex-col gap-5 shadow-sm
                ${i === 0 ? "lg:col-span-2" : ""}
              `}
            >
              <StarRating rating={t.rating} />

              <blockquote className="text-zinc-800 text-sm md:text-base leading-relaxed font-light flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="h-px bg-zinc-100 w-full" />

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900">
                    {t.name}
                  </p>
                  <p className="text-[10px] text-zinc-400 uppercase tracking-[0.15em] mt-0.5">
                    {t.location}
                  </p>
                </div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-green-700 border border-green-200 bg-green-50 px-3 py-1.5">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust row ──────────────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16 text-center">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "100%", label: "Quality Guarantee" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-clash-display text-4xl font-bold text-zinc-900">
                {stat.value}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

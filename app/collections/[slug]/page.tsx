import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COLLECTIONS, getCollection } from "@/data/collectionsData";
import ProductCard from "@/Components/common/ProductCard";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const collection = getCollection(resolvedParams.slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* ── Hero Parallax Banner ────────────────────────────────────────── */}
      <section className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{
            backgroundImage: `url(${collection.bannerImage})`,
            // Fallback for Safari which struggles with bg-fixed
            backgroundAttachment: "fixed",
          }}
        />

        {/* Dynamic Tint Overlay based on accent colour */}
        <div
          className="absolute inset-0 z-10 mix-blend-multiply opacity-60"
          style={{ backgroundColor: collection.accentColour }}
        />
        <div className="absolute inset-0 z-10 bg-black/40" />

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/80 uppercase mb-4 flex items-center gap-4">
            <span className="w-8 h-px bg-white/50" />
            Collection
            <span className="w-8 h-px bg-white/50" />
          </span>
          <h1 className="font-clash-display text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-white leading-none tracking-tight mb-6 drop-shadow-lg">
            {collection.title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90 font-medium tracking-wide max-w-2xl text-balance drop-shadow-md">
            {collection.subtitle}
          </p>
        </div>
      </section>

      {/* ── Description & Grid Container ────────────────────────────────── */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-8 md:px-12 py-16 md:py-24">
        {/* Collection Description */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <p className="text-base md:text-lg lg:text-xl text-zinc-600 leading-relaxed">
            {collection.description}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {collection.products.map((item, i) => (
            <ProductCard key={`${item.slug}-${i}`} item={item} />
          ))}
        </div>
      </section>

      {/* ── Back to Home ────────────────────────────────────────────────── */}
      <div className="w-full flex justify-center pb-24">
        <Link
          href="/"
          className="border border-text-black text-text-black px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-text-black hover:text-white transition-colors duration-300"
        >
          Back To Home
        </Link>
      </div>
    </main>
  );
}

import ProductImageGallery from "@/Components/Swipers/ProductImageGallery";
import ProductAccordion from "./ProductAccordion";
import SizeSelector from "./SizeSelector";
import QuantitySelector from "./QuantitySelector";
import TrustBadges from "./TrustBadges";

const PRODUCT = {
  name: "God's Plan",
  subtitle: "Classic Tee",
  price: "Rs 987",
  badge: "New Arrival",
  images: [
    "/tshirts/godsplan/godsplan1.jpg",
    "/tshirts/godsplan/godsplan1.jpg",
    "/tshirts/godsplan/godsplan1.jpg",
  ],
};

export default function ProductDetail() {
  return (
    <div className="flex flex-col gap-6 min-h-screen text-text-black pb-20 max-w-[1400px] mx-auto px-4">
      {/* Breadcrumb */}
      <nav className="flex gap-2 text-[10px] uppercase tracking-[0.2em] opacity-40 mt-4">
        <span>Home</span> / <span>T-Shirts</span> / <span>{PRODUCT.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
        {/* Left: Image Gallery */}
        <ProductImageGallery images={PRODUCT.images} />

        {/* Right: Details — sticky on desktop */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-20">
          {/* Title & Price */}
          <div className="flex flex-col gap-3">
            <h1 className="font-clash-display text-4xl lg:text-5xl font-medium uppercase leading-[1.1] tracking-tight">
              {PRODUCT.name} <br />
              <span className="opacity-50">{PRODUCT.subtitle}</span>
            </h1>
            <div className="flex items-center gap-3 mt-1">
              <span className="font-clash-display text-2xl font-light">
                {PRODUCT.price}
              </span>
              <span className="text-[10px] uppercase tracking-widest bg-black text-white px-2 py-0.5">
                {PRODUCT.badge}
              </span>
            </div>
          </div>

          {/* Size + Quantity */}
          <SizeSelector />
          <QuantitySelector />

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-text-black text-white py-3.5 px-6 uppercase text-xs font-medium tracking-[0.2em] hover:bg-black/80 transition-all active:scale-[0.98]">
              Add to Cart
            </button>
            <button className="w-full border border-black/10 py-3.5 px-6 uppercase text-xs font-medium tracking-[0.2em] hover:border-black transition-all active:scale-[0.98]">
              Instant Checkout
            </button>
          </div>

          {/* Trust Badges */}
          <TrustBadges />

          {/* Accordion */}
          <ProductAccordion />
        </div>
      </div>
    </div>
  );
}

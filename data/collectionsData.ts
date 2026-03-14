// data/collectionsData.ts
// Central data source for every collection page.
// All product images use Unsplash so no local assets are needed.

export interface CollectionProduct {
    name: string;
    price: string;
    image: string;
    slug: string;
}

export interface CollectionData {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    bannerImage: string;   // hero parallax background
    accentColour: string;  // CSS colour for tinting
    products: CollectionProduct[];
}

const COLLECTIONS: CollectionData[] = [
    {
        slug: "essentials",
        title: "Essentials",
        subtitle: "The Foundation of Every Wardrobe",
        description:
            "Stripped back to what matters. The Essentials line is built for people who understand that true style is about confidence in simplicity — clean silhouettes, premium fabrics, and enduring fit that moves with you every day.",
        bannerImage:
            "https://images.unsplash.com/photo-1591047139829-d91aecb6cae4?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#1a2e1a",
        products: [
            { name: "Essentials Tee", price: "NPR 999", image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=700&auto=format&fit=crop", slug: "essentials-tee" },
            { name: "Slim Cargo", price: "NPR 1,499", image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=700&auto=format&fit=crop", slug: "slim-cargo" },
            { name: "Crew Knit", price: "NPR 1,299", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=700&auto=format&fit=crop", slug: "crew-knit" },
            { name: "Relaxed Chino", price: "NPR 1,299", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=700&auto=format&fit=crop", slug: "relaxed-chino" },
        ],
    },
    {
        slug: "limited",
        title: "Limited",
        subtitle: "Rare Pieces for the Discerning Few",
        description:
            "Each Limited drop is a numbered, one-season release — once it's gone, it's gone. Handfinished details, premium sourced fabrics, and silhouettes designed to stand apart from the crowd.",
        bannerImage:
            "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#0f1414",
        products: [
            { name: "Shearling Bomber", price: "NPR 4,999", image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=700&auto=format&fit=crop", slug: "shearling-bomber" },
            { name: "Waxed Trench", price: "NPR 5,499", image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=700&auto=format&fit=crop", slug: "waxed-trench" },
            { name: "Leather Overshirt", price: "NPR 3,999", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=700&auto=format&fit=crop", slug: "leather-overshirt" },
            { name: "Modular Vest", price: "NPR 2,499", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6cae4?q=80&w=700&auto=format&fit=crop", slug: "modular-vest" },
        ],
    },
    {
        slug: "drops",
        title: "Drops",
        subtitle: "Seasonal Releases, Always Fresh",
        description:
            "The Drops line captures the pulse of the moment — seasonally curated pieces that respond to culture, street, and craft. Fast-moving, limited availability, always worth the scroll.",
        bannerImage:
            "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#1a1a2e",
        products: [
            { name: "Graphic Oversized Tee", price: "NPR 1,299", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=700&auto=format&fit=crop", slug: "graphic-oversized-tee" },
            { name: "Drop Shoulder Hoodie", price: "NPR 2,299", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=700&auto=format&fit=crop", slug: "drop-shoulder-hoodie" },
            { name: "Washed Denim Jacket", price: "NPR 3,299", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=700&auto=format&fit=crop", slug: "washed-denim-jacket" },
            { name: "Jogger Set", price: "NPR 2,099", image: "https://images.unsplash.com/photo-1580906853135-e7d641dfcfe7?q=80&w=700&auto=format&fit=crop", slug: "jogger-set" },
        ],
    },
    {
        slug: "anugraha",
        title: "Anugraha",
        subtitle: "Our Signature — Where It All Began",
        description:
            "Anugraha — meaning 'grace' — is the line that started it all. These are considered pieces, made with intention. Faith, craft, and identity woven into every stitch. The brand at its purest.",
        bannerImage:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#1a2e1a",
        products: [
            { name: "God's Plan Tee", price: "NPR 999", image: "/tshirts/godsplan/godsplan1.jpg", slug: "godsplan" },
            { name: "He Left The 99", price: "NPR 999", image: "/tshirts/lamb99/lamb1.jpg", slug: "lamb99" },
            { name: "Grace Hoodie", price: "NPR 2,499", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=700&auto=format&fit=crop", slug: "grace-hoodie" },
            { name: "Faith Crewneck", price: "NPR 1,999", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=700&auto=format&fit=crop", slug: "faith-crewneck" },
        ],
    },
    {
        slug: "bold",
        title: "Bold",
        subtitle: "Make the Statement. Own the Room.",
        description:
            "Bold is for the ones who don't wait to be noticed. Loud prints, structural shapes, and an unapologetic attitude. Wear it like you mean it.",
        bannerImage:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#2e1a1a",
        products: [
            { name: "Printed Coach Jacket", price: "NPR 3,499", image: "https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=700&auto=format&fit=crop", slug: "printed-coach-jacket" },
            { name: "Colour-Block Hoodie", price: "NPR 2,299", image: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=700&auto=format&fit=crop", slug: "colour-block-hoodie" },
            { name: "Contrast Stitch Tee", price: "NPR 1,199", image: "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?q=80&w=700&auto=format&fit=crop", slug: "contrast-stitch-tee" },
            { name: "Wide Leg Trouser", price: "NPR 1,899", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=700&auto=format&fit=crop", slug: "wide-leg-trouser" },
        ],
    },
    {
        slug: "clean",
        title: "Clean",
        subtitle: "Quiet Luxury, Loud Confidence",
        description:
            "The Clean collection speaks in whispers. Tonal layering, neutral palettes, and an obsession with fit over flash. For those who know the difference.",
        bannerImage:
            "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#1a1a1a",
        products: [
            { name: "Tonal Long-Sleeve", price: "NPR 1,399", image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=700&auto=format&fit=crop", slug: "tonal-long-sleeve" },
            { name: "Linen Overshirt", price: "NPR 2,299", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=700&auto=format&fit=crop", slug: "linen-overshirt" },
            { name: "Slim Trousers", price: "NPR 1,799", image: "https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=700&auto=format&fit=crop", slug: "slim-trousers" },
            { name: "Minimal Tee", price: "NPR 899", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=700&auto=format&fit=crop", slug: "minimal-tee" },
        ],
    },
    {
        slug: "precision",
        title: "Precision",
        subtitle: "Every Detail Considered. None Wasted.",
        description:
            "Precision is about obsessing over the things most brands ignore — seam placement, fabric weight, button hand-feel. These are garments for people who appreciate craftsmanship.",
        bannerImage:
            "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#0f1a0f",
        products: [
            { name: "Tailored Chore Coat", price: "NPR 4,299", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=700&auto=format&fit=crop", slug: "tailored-chore-coat" },
            { name: "Structured Blazer", price: "NPR 5,999", image: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?q=80&w=700&auto=format&fit=crop", slug: "structured-blazer" },
            { name: "Double-Stitched Tee", price: "NPR 1,099", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=700&auto=format&fit=crop", slug: "double-stitched-tee" },
            { name: "Pleated Trousers", price: "NPR 2,499", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=700&auto=format&fit=crop", slug: "pleated-trousers" },
        ],
    },
    {
        slug: "est-2024",
        title: "Est. 2024",
        subtitle: "The Year It Started. A Line That Marks It.",
        description:
            "Est. 2024 is our founding chapter — a commemorative collection that captures the mindset, the moment, and the mission of Anugraha's birth. Each piece carries the weight of where we started and the direction we're going.",
        bannerImage:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1800&auto=format&fit=crop",
        accentColour: "#1a2e1a",
        products: [
            { name: "Founding Tee", price: "NPR 1,199", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?q=80&w=700&auto=format&fit=crop", slug: "founding-tee" },
            { name: "Archive Hoodie", price: "NPR 2,799", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=700&auto=format&fit=crop", slug: "archive-hoodie" },
            { name: "Signature Cap", price: "NPR 799", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=700&auto=format&fit=crop", slug: "signature-cap" },
            { name: "Anugraha Tote", price: "NPR 599", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=700&auto=format&fit=crop", slug: "anugraha-tote" },
        ],
    },
];

export const collectionsBySlug = Object.fromEntries(
    COLLECTIONS.map((c) => [c.slug, c]),
);

export function getCollection(slug: string): CollectionData | undefined {
    return collectionsBySlug[slug];
}

export { COLLECTIONS };

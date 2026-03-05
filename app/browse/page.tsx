import ProductSection from "@/Components/browse/ProductSection";
import CategorySection from "@/Components/browse/CategorySection";

export default async function browse() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-5">
      <div className="hidden lg:block relative lg:col-span-2">
        <CategorySection />
      </div>
      <div className="lg:col-span-10">
        <ProductSection />
      </div>
    </div>
  );
}

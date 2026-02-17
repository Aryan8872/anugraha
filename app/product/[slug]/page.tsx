import ProductDetail from "@/Components/common/ProductDetail";

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetail />;
}

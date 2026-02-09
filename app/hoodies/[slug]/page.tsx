export default async function HoodieDetail({
  params,
}: {
  params: { slug: Promise<String> };
}) {
  const { slug } = await params;
  return <div>slug is : {slug}</div>;
}

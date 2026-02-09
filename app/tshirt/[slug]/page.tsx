export default async function TshirtDetail({
  params,
}: {
  params: { slug: Promise<String> };
}) {
  const { slug } = await params;
  return <div>tshirt slug is : {slug}</div>;
}

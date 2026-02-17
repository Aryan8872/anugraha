export default async function TshirtDetail({
  params,
}: {
  params: { slug: Promise<string> };
}) {
  const { slug } = await params;
  return <div>tshirt slug is : {slug}</div>;
}

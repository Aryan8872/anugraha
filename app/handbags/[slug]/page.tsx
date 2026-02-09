export default async function HandbagDetail({
  params,
}: {
  params: { slug: Promise<String> };
}) {
  const { slug } = await params;
  return <div>handbag slug is : {slug}</div>;
}

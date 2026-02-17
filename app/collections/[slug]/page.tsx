export default function CollectionsPage({
    params,
}: {
    params: { slug: string };
}) {
    return (
        <div>
            <h1>Collection {params.slug}</h1>
        </div>
    )
}
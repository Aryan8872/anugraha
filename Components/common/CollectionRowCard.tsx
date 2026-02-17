import Image from "next/image";

export default function CollectionRowCard() {
  return (
    <div className="w-full h-[55dvh] grid grid-cols-12">
      <div className="col-span-8 grid grid-cols-7 gap-x-4">
        <div className="col-span-5 shadow-sm border border-gray-200 relative">
          <Image
            src={"/collection.webp"}
            alt="collection1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative border border-gray-200 shadow-sm self-end col-span-2 h-[60%]">
          <Image
            src={"/collection.webp"}
            alt="collection1"
            fill
            className="object-cover "
          />
        </div>
      </div>
      <div className="relative col-span-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          dolores illo, iusto nobis corporis cupiditate vitae quaerat
          temporibus, consequatur vel aliquid quibusdam quasi omnis hic porro,
          consectetur libero est assumenda.
        </p>

        <button className="absolute bottom-4 right-4 bg-green-primary px-3 py-2 font-medium">
          view more{" "}
        </button>
      </div>
    </div>
  );
}

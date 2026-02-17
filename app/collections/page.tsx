import CollectionRowCard from "@/Components/common/CollectionRowCard";
import Image from "next/image";

export default function CollectionsPage() {
  return (
    <div className="flex w-full flex-col text-text-black  overflow-hidden">
      <div className="h-screen flex flex-col gap-2">
        <h1 className="font-clash-display text-center text-[12vw] sm:text-[10vw] font-medium uppercase leading-none tracking-wider md:text-[11vw]">
          Collections
        </h1>
        <div className="relative w-[95%] h-[60%] aspect-square ">
          <Image
            src={"/collection.webp"}
            alt="collection1"
            fill
            className="object-contain "
          />
          <p className="absolute top-12 md:left-16 font-clash-display  max-w-[30ch]">
            Collection that symbolizes Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Distinctio, sint. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Libero, cum?
          </p>

          <span className=" absolute -bottom-5 left-16 uppercase font-clash-display font-semibold text-2xl">
            {"New beginning"}
          </span>
        </div>
      </div>

      <CollectionRowCard />
    </div>
  );
}

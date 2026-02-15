"use client";

import Image from "next/image";

export default function CollectionTabSection() {
  const categoryTabs = ["hoodies", "bags", "tshirts"];
  const bigIndex = [3, 12, 13, 14];
  return (
    <section className="w-full bg-[#F8F8FA] ">
      <div className="flex flex-row items-center w-full lg:justify-between">
        <div className="flex flex-row gap-6">
          {categoryTabs.map((value, idx) => (
            <span
              className="relative group capitalize font-giuconda font-semibold text-gray-500 hover:text-black cursor-pointer transition-colors  duration-700 ease-in-out"
              key={idx}
            >
              {value}

              <span className="bg-black absolute  bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full  transition-all  duration-300 ease-in-out"></span>
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 text-center ">
          <span className="capitalize font-giuconda font-medium">
            Anugraha seasons
          </span>
          <span className="capitalize font-giuconda  text-3xl tracking-normal">
            details with eco-friendly materials
          </span>
        </div>

        <button className="border-gray-400 border-[0.6px] rounded-2xl px-3 py-2">
          season collection
        </button>
      </div>
      <div className="grid lg:grid-cols-12 gap-3 mt-10">
        <div className="col-span-4 flex flex-col gap-3">
          <div className={`grid grid-cols-2 h-[80vh] grid-rows-2 gap-3  `}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col  gap-3 text-center bg-white  rounded-lg px-3 py-2"
              >
                <div className={`relative rounded-lg w-full h-full`}>
                  <Image
                    alt=""
                    src={
                      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    fill
                    className="object-cover rounded-lg aspect-[2.5/3]"
                  />
                </div>
                <span className="font-"> Card of cactegory tab</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 bg-white w-full h-[50vh] text-center rounded-lg px-3 py-2">
            <div className={`relative rounded-lg w-full h-full`}>
              <Image
                alt=""
                src={
                  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                fill
                className="object-cover rounded-lg aspect-[2.5/3]"
              />
            </div>
          </div>
        </div>

        <div className={`col-span-4 flex flex-col gap-3 `}>
          <div className="flex flex-col gap-3 bg-white w-full h-[50vh] text-center rounded-lg px-3 py-2">
            <div className={`relative rounded-lg w-full h-full`}>
              <Image
                alt=""
                src={
                  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                fill
                className="object-cover rounded-lg aspect-[2.5/3]"
              />
            </div>
          </div>

          <div className={`h-[40vh] grid grid-cols-2   gap-3 `}>
            {Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col  gap-3 text-center  bg-white rounded-lg  px-3 py-2"
              >
                <div className={`relative rounded-lg w-full h-full`}>
                  <Image
                    alt=""
                    src={
                      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    fill
                    className="object-cover rounded-lg aspect-[2.5/3]"
                  />
                </div>
                <span className="font-"> Card of cactegory tab</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 bg-white w-full h-[50vh] text-center rounded-lg px-3 py-2">
            <div className={`relative rounded-lg w-full h-full`}>
              <Image
                alt=""
                src={
                  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                fill
                className="object-cover rounded-lg aspect-[2.5/3]"
              />
            </div>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-3">
          <div className={`grid grid-cols-2 h-[80vh] grid-rows-2 gap-3  `}>
            {Array.from({ length: 4 }).map((_, idx) => (
              <div
                key={idx}
                className="flex flex-col  gap-3 text-center bg-white  rounded-lg px-3 py-2"
              >
                <div className={`relative rounded-lg w-full h-full`}>
                  <Image
                    alt=""
                    src={
                      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    }
                    fill
                    className="object-cover rounded-lg aspect-[2.5/3]"
                  />
                </div>
                <span className="font-"> Card of cactegory tab</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 bg-white w-full h-[50vh] text-center rounded-lg px-3 py-2">
            <div className={`relative rounded-lg w-full h-full`}>
              <Image
                alt=""
                src={
                  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                fill
                className="object-cover rounded-lg aspect-[2.5/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

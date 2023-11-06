import { Category } from "@/types";
import Image from "next/image";

export default function ProductsHero({ subsection }: { subsection: Category }) {
  return (
    <section className="relative py-8 md:py-12 bg-white">
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full text-left">
          <h5 className="font-heading text-left text-2xl md:text-3xl">
            {/* {data.name} */}Lotions
          </h5>
        </div>
        <div className="mt-6 md:mt-12 w-full aspect-[3.5] rounded-xl">
          <div className="w-full h-full">
            <Image
              src="/images/clere_hero_banner.jpg"
              /*{subsection.image ?? ""}*/ alt=""
              width="1280"
              height="720"
              className="w-full h-full object-center object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


import { Category, Product } from "@/types";
import Image from "next/image";
import ProductCard from "./ProductCard";
import data from "../../data/products.json";

export default function ProductBrandSection({
  subsection,
}: {
  subsection: Category;
}) {
  return (
    <section className="relative bg-background">
      <div className="w-full h-full">
        <div className="w-full aspect-[21/3] overflow-hidden">
          <Image
            src="/images/clere_banner.png"
            alt=""
            height="1280"
            width="720"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      <div className="relative py-8 md:py-12">
        <div className="relative px-6 md:px-8 max-w-5xl mx-auto">
          {/* <div className="flex items-center flex-wrap justify-self-center gap-x-4 gap-y-6 lg:gap-x-6 lg:gap-y-8"> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 lg:gap-x-6 lg:gap-y-12">
            {data.map((product: Product) => {
              return <ProductCard {...product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

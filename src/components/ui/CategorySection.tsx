import { Category } from "@/types";
import ProductCard from "./ProductCard";
import SectionBanner from "./SectionBanner";
import products from "../../data/products.json";

export default function CategorySection({ section }: { section: Category }) {
  return (
    <section className="relative pt-8 md:pt-12 bg-white">
      <SectionBanner section={section} />
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full">
          <div className="relative grid grid-flow-col justify-start auto-cols-min gap-x-4 md:gap-x-6 select-none overflow-scroll -mx-6 md:-mx-8 px-6 md:px-8 pt-6 pb-8 md:py-12 no-scrollbar">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

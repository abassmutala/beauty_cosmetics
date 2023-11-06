import { Icons } from "./icons";
import products from "../data/products.json";
import ProductCard from "./ui/ProductCard";

function NewReleases() {
  return (
    <section className="relative py-8 md:py-12 bg-white">
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full text-center">
          <h5 className="font-heading text-center text-2xl md:text-3xl">
            New Releases
          </h5>
        </div>
        <div className="w-full">
          <div className="relative grid grid-flow-col justify-start auto-cols-min gap-x-4 md:gap-x-6 select-none overflow-scroll -mx-6 md:-mx-8 px-6 md:px-8 py-6 md:py-12 no-scrollbar">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            type="button"
            className="bg-accent px-4 py-3 text-white font-bold hover:bg-orange-700"
          >
            <div className="w-full flex gap-x-4">
              <span className="">View all</span>
              <Icons.moveRight className="stroke-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewReleases;

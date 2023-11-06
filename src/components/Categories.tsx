import { Category } from "@/types";
import CategoryCard from "./ui/CategoryCard";

async function getCategories() {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      method: "GET",
      // cache: "no-store",
    });
    const data = await res.json();
    return data;
    
  } catch (error) {
    throw new Error("Could not fetch data!")
  }
}

export default async function Categories() {
  const categories: Category[] = await getCategories();

  return (
    <section className="relative py-8 md:py-12 bg-white">
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full text-center">
          <h5 className="font-heading text-center text-2xl md:text-3xl">
            Categories
          </h5>
        </div>
        <div className="w-full pt-6 md:pt-12">
          <div className="relative grid grid-flow-col lg:justify-center auto-cols-min gap-x-4 md:gap-x-6 select-none overflow-scroll -mx-6 md:-mx-8 px-6 md:px-8 no-scrollbar">
            {/* <div className="w-full flex items-center justify-center gap-x-4 md:gap-x-6 overflow-scroll -mx-6"> */}
            {categories?.map((item) => {
              return <CategoryCard key={item.id} category={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

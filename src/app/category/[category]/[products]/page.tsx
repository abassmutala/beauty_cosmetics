import ProductsHero from "@/components/ProductsHero";
import ProductBrandSection from "@/components/ui/ProductBrandSection";
import { Category } from "@/types";

async function getProducts(categoryID: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/categories/subcategory?id=${categoryID}`,
      { method: "GET", cache: "no-store" }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error("Could not fetch data!");
  }
}

export default async function BrandProducts({
  params,
}: {
  params: { products: string };
}) {
  const data: Category = { id: "", name: "", image: "" };
  const dd = await getProducts(params.products);
  console.log(params);
  console.log(dd);

  return (
    <main className="min-h-screen font-body">
      <ProductsHero subsection={data} />
      <ProductBrandSection subsection={data} />
    </main>
  );
}

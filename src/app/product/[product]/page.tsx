import ProductDetails from "@/components/ProductDetails";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { Product } from "@/types/index";

async function getProductDetails(id: string) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/products/product?id=${id}`,
      {
        method: "GET",
        // cache: "no-store",
        // next: {
        //   revalidate: 9000,
        // },
      }
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error("Could not fetch data!");
  }
}

async function ProductInfo({ params }: { params: { product: string } }) {
  const { product }: { product: Product } = await getProductDetails(
    params.product
  );

  return (
    <main className="font-body">
      <Breadcrumbs product={product} />
      <ProductDetails product={product} />
      {/* Other products in this range */}
      {/* Reviews */}
    </main>
  );
}

export default ProductInfo;

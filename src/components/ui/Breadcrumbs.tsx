import { Product } from "@/types/index";
import Link from "next/link";

export default function Breadcrumbs({ product }: { product: Product }) {
  return (
    <section className="hidden md:block relative pt-6 md:pt-12">
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex w-full">
          <Link href="/" className="font-medium hover:text-accent">
            <span>Home /</span>
          </Link>
          <Link
            href={`/categories/${product.category}`}
            className="font-medium hover:text-accent"
          >
            <span> {product.category} /</span>
          </Link>
          <Link href="" className="font-medium hover:text-accent">
            <span>{product.subCategory} /</span>
          </Link>
          <span>{product.name}</span>
        </div>
      </div>
    </section>
  );
}

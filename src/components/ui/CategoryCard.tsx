import Image from "next/image";
import { Category } from "@/types";
import Link from "next/link";

function CategoryCard({ category }: { category: Category }) {
  const names = category.name.toLowerCase().split(" ");
  const linkFromName = names.join("-");

  return (
    <Link
      className=""
      // href={{
      //   pathname: `/category/${category.href}`,
      //   query: { slug: category.name },
      // }}
      href={`category/${linkFromName}`}
    >
      <div className="group relative h-full w-36 lg:w-48 rounded-lg aspect-portrait">
        <div className="relative h-full overflow-hidden rounded-lg">
          <Image
            src={category.image}
            alt={category.name}
            width="1024"
            height="768"
            className="h-full relative object-cover object-center group-hover:scale-110 transition duration-300 ease-in-out"
          />
        </div>
        <div className="absolute inset-0 w-full h-full bg-black/40 rounded-lg">
          <div className="h-full flex items-center justify-center">
            <p className="text-white text-lg md:text-xl font-heading">
              {category.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;

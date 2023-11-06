import { Card, CardContent, CardFooter } from "./Card";
import Image from "next/image";
import { Product } from "@/types";
import Link from "next/link";
import { formatTo2Decimals } from "@/app/utils";

function ProductCard(product: Product) {
  // const names:string[] = product.name.toLowerCase().split(" ");
  // const name:string = names.join("-");
  // const url:string = `/product/${name}-${product.id}`
  // console.log(url);

  const discountPrice =
    product.discountPrice &&
    formatTo2Decimals(product.discountPrice!.toString());
  const standardPrice = formatTo2Decimals(product.price.toString());

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="w-full min-w-[168px] lg:min-w-[200px] aspect-product overflow-hidden flex flex-col">
        <div className="relative overflow-hidden grow shrink basis-auto">
          <Image
            // src={product.image}
            src={
              Number.parseInt(product.id) % 2
                ? "/images/Clere Avocado Milk Creme High Res.png"
                : "/images/shampoo.png"
            }
            alt={product.name}
            width="1024"
            height="768"
            className="relative w-full h-full object-contain object-center overflow-hidden"
          />
        </div>
        <CardContent className="grow-0 shrink basis-auto p-0">
          <div className="w-full">
            <p className="uppercase text-xs font-heading line-clamp-2">
              {product.name}
            </p>
          </div>
        </CardContent>
        <CardFooter className="grow-0 shrink basis-auto font-heading">
          {product.discountPrice && (
            <p className="uppercase text-xs text-subtitle font-bold line-through mr-2">
              ¢{parseFloat(product.price.toString()).toFixed(2)}
            </p>
          )}
          <p className="uppercase text-xs text-accent font-bold">
            ¢{product.discountPrice ? discountPrice : standardPrice}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProductCard;

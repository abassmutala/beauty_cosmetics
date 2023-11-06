import { Product } from "@/types/index";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

function ProductDetails({ product }: { product: Product }) {
  return (
    <section className="relative py-8 md:py-12">
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-1/2">
            <div className="w-full max-w-[480px] aspect-square bg-white rounded-md">
              <Image
                src="/images/shampoo.png"
                alt=""
                width="1280"
                height="720"
                className="w-full h-full object-center object-contain"
              />
            </div>
            {/* <div className="w-full h-16 md:h-24 mt-4 md:mt-6 border"></div> */}
          </div>
          <div className="w-full lg:w-1/2 pt-6 md:pt-0 md:pl-8 lg:pl-12">
            <div className="w-full">
              <div className="w-full mb-8">
                <h5 className="font-heading font-semibold text-left text-2xl md:text-3xl line-clamp-3">
                  {product.name}
                </h5>
              </div>
              <div className="w-full mb-4 md:mb-8">
                <p className="mb-1">
                  Wash away dirt and excess oil without stripping skin or
                  clogging pores with the Cleanser. The lightly foaming, gel
                  texture is made for all skin types but is especially loved by
                  those with sensitive skin.
                </p>
                <p className="">Also known as Gentle Cleanser</p>
              </div>
              <div className="w-full mb-4 md:mb-8">
                <p className="font-semibold mb-1">Active ingredients</p>
                <ul className="">
                  <li className="">Coconut oil</li>
                  <li className="">Glycerin</li>
                  <li className="">Canola oil</li>
                  <li className="">Lanolin</li>
                </ul>
              </div>
              <div className="w-full mb-4 md:mb-8">
                <p className="font-semibold mb-1">Usage instructions</p>
                <p className="">
                  Wash with the Cleanser twice daily. Massage the Cleanser onto
                  damp skin. Rinse off thoroughly with warm water, then pat dry.
                </p>
              </div>
              <div className="w-full mb-4 md:mb-8">
                <p className="font-semibold mb-1">Size</p>
                {/* <p className="">500ml</p> */}
                <fieldset className="w-full max-w-[480px]">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="banana">250ml</SelectItem>
                      <SelectItem value="apple">500ml</SelectItem>
                      <SelectItem value="blueberry">1000ml</SelectItem>
                    </SelectContent>
                  </Select>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;

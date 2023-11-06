import { featureConfig } from "@/config/Features";
import Feature from "./ui/Feature";

export default function Features() {
  return (
    <section className="relative py-8 md:py-12 bg-white">
      <div className="relative px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full text-center">
          <h6 className="font-heading text-center text-lg md:text-xl uppercase">
            #Beauty
          </h6>
        </div>
        <div className="w-full pt-2 md:pt-4 flex flex-col lg:flex-row lg:justify-between gap-y-6">
          {featureConfig.features?.map((item) => (
            <Feature feature={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
